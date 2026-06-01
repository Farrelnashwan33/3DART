import { NextResponse } from "next/server";

function getFallbackResponse(query: string): string {
  const q = query.toLowerCase().trim();
  
  if (q.includes("halo") || q.includes("hai") || q.includes("tanya") || q.includes("nanya") || q.includes("pagi") || q.includes("siang") || q.includes("sore") || q.includes("malam") || q.includes("bantu")) {
    return "Halo! Selamat datang di Vision Support. Ada yang bisa saya bantu mengenai layanan cetak 3D, pilihan ukuran, estimasi pengerjaan, atau cara pemesanan?";
  }
  
  if (q.includes("lama") || q.includes("hari") || q.includes("pengerjaan") || q.includes("proses") || q.includes("durasi") || q.includes("kapan") || q.includes("cepat")) {
    return "Proses pengerjaan cetak 3D di Toko3DArt rata-rata memakan waktu 3–7 hari kerja, tergantung pada ukuran model dan tingkat kerumitan detail desain yang Anda pilih.";
  }
  
  if (q.includes("harga") || q.includes("biaya") || q.includes("berapa") || q.includes("ongkos") || q.includes("bayar") || q.includes("murah") || q.includes("pricing")) {
    return "Harga cetak 3D bervariasi tergantung pada ukuran model (mulai dari 10cm hingga 25cm) serta kerumitan desainnya. Silakan lihat pilihan ukuran di halaman 'Perekat' atau ajukan file custom Anda untuk penawaran harga.";
  }
  
  if (q.includes("custom") || q.includes("desain sendiri") || q.includes("model sendiri") || q.includes("request") || q.includes("file")) {
    return "Ya, kami menerima pesanan dengan desain custom! Anda bisa mengirimkan file model 3D Anda (seperti format .stl atau .obj) kepada kami untuk dicetak dengan bahan resin berkualitas tinggi.";
  }
  
  if (q.includes("order") || q.includes("pesan") || q.includes("shopee") || q.includes("wa") || q.includes("whatsapp") || q.includes("beli") || q.includes("hubungi")) {
    return "Untuk pemesanan, Anda bisa membeli langsung melalui Shopee (klik tombol navigasi 'Cara Order') atau menghubungi kami via WhatsApp untuk konsultasi file model custom.";
  }
  
  if (q.includes("ukuran") || q.includes("size") || q.includes("cm") || q.includes("dimensi") || q.includes("besar") || q.includes("kecil")) {
    return "Kami menyediakan 5 pilihan ukuran standar untuk koleksi Anda: Mini (10 cm), Gift (12 cm), Best Seller (15 cm), Large (20 cm), dan Premium (25 cm).";
  }

  if (q.includes("kualitas") || q.includes("bahan") || q.includes("resin") || q.includes("bagus") || q.includes("kuat") || q.includes("detail")) {
    return "Kami menjamin kualitas cetak 3D dengan detail yang sangat tajam, presisi tinggi, dan menggunakan material resin pilihan yang kokoh serta berfinishing halus.";
  }

  return "Terima kasih atas pertanyaan Anda! Silakan lengkapi environment variable `GEMINI_API_KEY` di `.env.local` untuk asisten AI interaktif penuh.\n\nBerikut ringkasan informasi layanan kami:\n- Waktu pengerjaan: 3–7 hari kerja.\n- Model Custom: Menerima file desain 3D Anda.\n- Pemesanan: Melalui WhatsApp dan Shopee.";
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    const userQuery = messages[messages.length - 1]?.content || "";

    // If key is missing or placeholder, use fallback
    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY" || apiKey.trim() === "") {
      const reply = getFallbackResponse(userQuery);
      return NextResponse.json({ content: reply });
    }

    const systemPrompt = `Kamu adalah customer service Vision Support yang ramah, profesional, dan membantu pelanggan terkait layanan cetak 3D, figur custom, prototype, miniatur, merchandise custom, harga, estimasi pengerjaan, dan proses pemesanan.

Knowledge Base:
- Pengerjaan rata-rata 3–7 hari.
- Harga tergantung ukuran dan tingkat kerumitan.
- Bisa menerima desain custom.
- Pemesanan melalui WhatsApp dan Shopee.
- Melayani cetak 3D berbagai kebutuhan.`;

    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            }
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          return NextResponse.json({ content: replyText });
        }
      }
      
      const reply = getFallbackResponse(userQuery);
      return NextResponse.json({ content: reply });
    } catch (apiError) {
      console.warn("Gemini API connection error, falling back to local dataset:", apiError);
      const reply = getFallbackResponse(userQuery);
      return NextResponse.json({ content: reply });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Gagal memproses pesan" }, { status: 500 });
  }
}
