import React from "react";

const Content_Admin = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-2xl font-bold">ADMINISTRATOR QOIDALARI</h1>
        <p className="text-xs font-medium">
          Qoidalarni bilmaslik javobgarlikdan ozod qilmaydi!
        </p>
      </div>

      <h2 className="font-bold mt-4">1. Administratorning vazifalari</h2>
      {[
        "Administrator serverda doim onlayn bo‘lishi shart.",
        "Administrator shubhali o‘yinchilarni kuzatib borishi kerak.",
        "Administrator har qanday jazoni (ban, mute va h.k.) berish sababini tushuntirishi kerak.",
        "Administrator shubhali o‘yinchilarni tekshirishi kerak.",
        "Administrator doimiy nick bilan o‘ynashi shart.",
        "Administrator o‘yinchilarning shikoyatlari, so‘rovlari va savollariga javob berishi kerak.",
        "Administrator loyihaning rivojlanishida ishtirok etishi shart.",
        "Administrator o‘yinchilar qoidalariga rioya qilishlarini nazorat qilishi kerak.",
        'Jazo berishdan oldin administrator o‘yinchiga loyiha forumidagi "Shikoyatlar" bo‘limida apellyatsiya topshirish imkoniyati haqida eslatishi shart.',
        'Administrator "Tekshiruv qoidalari" bo‘limidagi ko‘rsatmalarga qat’iy rioya qilishi kerak.',
      ].map((rule, i) => (
        <p key={i} className="text-xs">
          <span className="p-1 bg-gray-600 rounded-[4px]">{`1.${i + 1}`}</span>{" "}
          {rule}
        </p>
      ))}

      <h2 className="font-bold mt-4">2. Ta’qiqlangan harakatlar</h2>
      {[
        "Administrator boshqa loyihalarni bir vaqtda boshqarishi taqiqlanadi.",
        "O‘yinchilarni asosli sabab yoki dalilsiz jazolash taqiqlanadi.",
        "Administrator boshqa o‘yinchilarni haqorat qilishi mumkin emas.",
        "Administrator o‘z huquq va akkauntini uchinchi shaxslarga berishi mumkin emas.",
        "Administrator o‘yinchilar uchun belgilangan qoidalarni buzishi mumkin emas.",
        "Administrator o‘yinchilarni provokatsiya qilishi taqiqlanadi.",
        "Administrator o‘yinchilar roziligisiz xaritani o‘zgartirishi mumkin emas. O‘zgartirishdan oldin ovoz berish yoki o‘yinchilardan so‘rash kerak.",
        "Xaritada faqat ikki o‘yinchi qolganida (1ga1) administrator qayta tug‘ilish (respawn) qilishi taqiqlanadi.",
        "Administrator o‘yinchilarga hurmatsizlik qilishi mumkin emas.",
        "Administrator o‘yinchilar va loyiha rahbariyatining roziligisiz o‘z qoidalarini joriy qilishi mumkin emas.",
        "Administrator server yoki xarita xatolaridan o‘z manfaatlari uchun foydalanishi taqiqlanadi.",
      ].map((rule, i) => (
        <p key={i} className="text-xs">
          <span className="p-1 bg-gray-600 rounded-[4px]">{`2.${i + 1}`}</span>{" "}
          {rule}
        </p>
      ))}

      <h2 className="font-bold mt-4">3. Ogohlantirish tizimi</h2>
      <p className="text-xs">
        <span className="p-1 bg-gray-600 rounded-[4px]">3.1</span> Loyihada
        bosh administrator va uning o‘rinbosari tomonidan boshqariladigan
        administratorlar uchun ogohlantirishlar tizimi mavjud.
      </p>
      <p className="text-xs">
        <span className="p-1 bg-gray-600 rounded-[4px]">3.2</span> Administrator aniq
        qoidabuzarlik uchun ogohlantirilishi mumkin.
      </p>
      <p className="text-xs">
        <span className="font-semibold">5 ta ogohlantirish</span> to‘plaganidan keyin
        administrator o‘z huquqlaridan mahrum qilinadi.
      </p>
    </div>
  );
};

export default Content_Admin;
