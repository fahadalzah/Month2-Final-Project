window.addEventListener("load", function () {

    let back=document.getElementById("front-back-color")
    let main=document.getElementById("main")
    let heroBox=document.getElementById("hero-box");
    
    let heroHeading = document.createElement("h1");
    let heroDesc = document.createElement("p");
    let link=document.createElement("a");
    let buttonMore=document.createElement("button");

    heroHeading.innerHTML= "من نحن ؟";
    heroHeading.id="hero-heading"

    heroDesc.innerHTML="مرحبًا بك في وصلة، نحن هنا نقدم حلاً شاملاً لاحتياجات إصلاح الأجهزة الالكترونية. نحن ملتزمون بتقديم خدمات عالية الجودة وموثوقة للمساعدة في الحفاظ على أجهزتك في حالة جيدة والعودة إلى العمل بشكل فعال. نهدف إلى تقديم تجربة سهلة ومريحة سواء كنت تفضل إجراء إصلاح ذاتي أو الاستفادة من خدماتنا في الموقع."
    heroDesc.id= "hero-desc";

    buttonMore.innerHTML= "المزيد"
    buttonMore.id="button1"


    
    main.appendChild(heroBox);
    heroBox.appendChild(heroHeading);
    heroBox.appendChild(heroDesc);
    heroBox.appendChild(link)
    link.appendChild(buttonMore)
})