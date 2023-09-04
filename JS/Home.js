window.addEventListener("load", function () {

    let main=document.getElementById("main")
    let heroBox=document.getElementById("hero-box");

    let heroHeading = document.createElement("h1");
    let heroDesc = document.createElement("p");


    heroHeading.innerHTML= "هل هاتفك بحاجة إلى بعض الاهتمام ؟ ";
    heroHeading.id="hero-heading"

    heroDesc.innerHTML= "لا داعي للقلق بشأن تقطع يومك أو العثور على وقت للمرور - سنأتي إليك! أسطولنا من الفنيين الماهرين مجهز للتعامل مع جميع احتياجات إصلاح الأجهزة الخاصة بك، مباشرةً على عتبة منزلك. لا تنتظر. فأن فريقنا الماهر سيعيد جهازك إلى الحالة الأمثل، دون أن تضطر إلى رفع ساكن.استمتع بخدمة سلسة، وإصلاحات عالية الجودة، وأقصى درجات الراحة "
    heroDesc.id= "hero-desc";

    main.appendChild(heroBox);
    heroBox.appendChild(heroHeading);
    heroBox.appendChild(heroDesc);
})

/////////////////////////////////////////////////////////////////
