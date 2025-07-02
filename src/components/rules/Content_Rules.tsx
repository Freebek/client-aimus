import React from "react";

const Content_Rules = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Umumiy qoidalar</h1>
        <p className="text-xs text-[#f7f7f7]">
          Serverlarimizga ulanib yoki loyihaning rasmiy saytiga tashrif buyurib,
          siz quyidagi qoidalarga avtomatik ravishda rozilik bildirgan bo‘lasiz
          va ularga rioya qilishga majbursiz.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">1. Chitlar va konfiguratsiyalar</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.1</span> Har
            qanday chitlar, konfiguratsiyalar, o‘rnatuvchilar, skinchanger’lar,
            AHK skriptlar va ustunlik beruvchi boshqa dasturlarni ishlatish yoki
            saqlash taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: Akkauntning doimiy bloklanishi.]
          </span>
        </div>
        <p className="text-xs">
          * Agar sizda CS:GO uchun mo‘ljallangan, ammo CS2 da ishlamaydigan chit
          yoki konfiguratsiyalar o‘rnatilgan bo‘lsa — ban berilmaydi. Ammo
          faylning so‘nggi o‘zgartirilgan sanasi 26.09.2023 dan kech bo‘lmasligi
          kerak.
        </p>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.2</span>{" "}
            Administrator sizdan chit borligiga shubha tug‘ilganda tekshiruvni
            talab qilish huquqiga ega. O‘yinchi bu talabga bo‘ysunishi shart.
          </p>
          <span className="text-red-500 text-sm">
            [Tekshiruvdan bosh tortish: 1-marta — 30 kunlik ban. 2-marta —
            doimiy ban.]
          </span>
        </div>
        <p className="text-xs">
          Tekshiruv paytida trolling/yaroqsiz xatti-harakat: 3 kunlik ban
        </p>
        <p className="text-xs">Tasdiqlashni kechiktirish: 30 kunlik ban</p>
        <p className="text-xs">Tekshiruv tayminglari:</p>
        <p className="text-xs">Discord nikini yuborish: 5 daqiqa</p>
        <p className="text-xs">AnyDesk ID yuborish: 5 daqiqa</p>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.3</span>{" "}
            Administrator bilan dalilsiz tortishish va mojaro qilish
            taqiqlanadi. Shikoyatlar quyidagi manzil orqali qabul qilinadi:
            t.me/aimus_administration
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: mute/gag — 30 daqiqadan boshlab cheksizgacha]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.4</span>{" "}
            Moderatorlar va administratorlarning shaxsiy hayotini muhokama
            qilish taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: mute/gag — 30 daqiqadan boshlab cheksizgacha]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.5</span> Agar
            o‘yinchining Steam akkaunti FACEITda chitlar uchun bloklangan yoki
            Ban Patrol tomonidan aniqlangan bo‘lsa, serverda avtomatik tarzda
            bloklanadi.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">2. Ovoza va matnli chat</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.1</span> Qo‘pol
            so‘zlar, baqirish, provokatsiyalar, toksiklik, mikrofon orqali
            musiqa ijro etish, flame, javob qaytarish va shunga o‘xshash
            xatti-harakatlar taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: mute/gag — 30 daqiqadan cheksizgacha]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.2</span>{" "}
            Administratorlarga nisbatan haqorat qilish taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: mute/gag — 30 daqiqadan cheksizgacha]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.3</span> Oila
            a’zolariga nisbatan haqoratlar qat’iyan taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: mute/gag — 360 daqiqadan cheksizgacha]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.4</span>{" "}
            Millatlararo nizolarni qo‘zg‘atish va siyosiy muhokamalar
            taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: 180 daqiqalik mute/gag]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.5</span>{" "}
            Serverdagi xatoliklardan (bag) foydalanish taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: 1 kundan 1 oygacha ban]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.6</span> Flood —
            10 soniyada 5 tadan ortiq xabar yuborish.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: 60 daqiqalik chat banni]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.7</span> Ruxsatsiz
            Discord/Telegram/sayt/server reklamasi taqiqlanadi (faqat: aimus.uz,
            t.me/aimus_chat, discord.gg/aimus ruxsat etiladi)
          </p>
          <span className="text-red-500 text-sm">[Jazo: 30 kunlik ban]</span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.8</span> O‘limdan
            keyin boshqa o‘yinchilar haqida ma’lumot uzatish (monitoring)
            taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: 180 daqiqa mute + 30 kunlik ban]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.9</span>{" "}
            O‘zingizni admin sifatida ko‘rsatish (agar siz admin bo‘lmasangiz)
            taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 3–7 kunlik ban]</span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.10</span> AIMUS
            loyihasini haqorat qilish qat’iyan taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: doimiy ban]</span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.11</span> Report
            funksiyasidan gagni aylanib o‘tish yoki administratorni troll qilish
            uchun foydalanish taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 120 daqiqa ban]</span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.12</span> Ovoz
            o‘zgartiruvchi dasturlardan foydalanish taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 30–90 daqiqa ban]</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">3. O‘yin jarayoni</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.1</span> Xarita
            ustidagi bug’lar, eksploitlar va teshiklardan foydalanish
            taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 3 kunlik ban]</span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.2</span> Asosiy
            akkaunt bloklangandan keyin boshqa akkaunt orqali o‘ynash
            taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: barcha akkauntlarga doimiy ban]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.3</span> Yangi
            o‘yinchilarga nisbatan asossiz tarzda ovoz berish (!vk, !vb, !vm)
            taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 360 daqiqa ban]</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">4. O‘yinchi ismlari (nick)</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.1</span> Qo‘pol
            niklar va taglar taqiqlanadi. Admin ogohlantiradi, agar 5 daqiqa
            ichida nick o‘zgartirilmasa — jazo beriladi.
          </p>
          <span className="text-red-500 text-sm">
            [Jazo: 60–360 daqiqa ban]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.2</span> Reklama
            mazmunidagi niklar taqiqlanadi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 2 kunlik ban]</span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.3</span>{" "}
            Quyidagidek soxta taglar taqiqlanadi: Admin, Moderator, Creator va
            h.k.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 2 kunlik ban]</span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.4</span> Niklar
            faqat lotin yoki kirill harflarida bo‘lishi kerak (A-Z, А-Я), 0–12
            oralig‘idagi raqamlar ruxsat etiladi.
          </p>
          <span className="text-red-500 text-sm">[Jazo: 1 kunlik ban]</span>
        </div>
      </div>
    </>
  );
};

export default Content_Rules;
