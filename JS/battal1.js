window.addEventListener("load", function () {

    let main=document.getElementById("main")
    let heroBox=document.getElementById("hero-box");

    let heroHeading = document.createElement("h1");
    let heroDesc = document.createElement("p");

    heroHeading.innerHTML= " معاً نحو التطوع";
    heroHeading.id="hero-heading"

    heroDesc.innerHTML= "العمل التطوعي جزء من رؤية 2030 انضم اليوم وكن جزءاً  من رؤية 2030  وانضم إلى برنامج وصلة للأستفاد من الدورات البرمجية والتصنيعية ، كما تتيح لك ايضاً توثيق ساعاتك وإصدار شهاداتك التطوعية ."
    heroDesc.id= "hero-desc";

    main.appendChild(heroBox);
    heroBox.appendChild(heroHeading);
    heroBox.appendChild(heroDesc);
})

window.addEventListener("load", function () {

    let main2=document.getElementById("main2")
    let heroBox2=document.getElementById("hero-box2");

    let heroHeading2 = document.createElement("h1");
    let heroDesc2 = document.createElement("p");
    heroDesc2.innerHTML= "تطوع معنا وانشاء ورشتك الخاصة .. مع دورات تعليم من الألف إلى الياء لطلاب الثانوي وبرنامج لناشئين والتي تهدف إلى تعليم كيفية الصيانة الهواتف مثل ( مشاكل النظام ، تغير القطع الداخلية) التي يمكن أن تكون هدفه الأول في عالم التقنية ."
    heroDesc2.id= "hero-desc2";

    main2.appendChild(heroBox2);
    heroBox2.appendChild(heroHeading2);
    heroBox2.appendChild(heroDesc2);
})
