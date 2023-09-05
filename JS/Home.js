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

    let body1 = document.getElementById("body")
    
    let father=document.createElement("section")
    let square=document.createElement("div")
    let al=document.createElement("div")
    let title=document.createElement("h1")

    al.id="contain-title";
    title.id="title";
    title.innerHTML="مميزاتنا"

    father.appendChild(al);
    al.appendChild(title)

    father.id="father"
    square.id="square"

    body1.appendChild(father)
    father.appendChild(square)

{
    let body1 = document.getElementById('body')
    let firstsection = document.createElement('section')
    body1.appendChild(firstsection)
    firstsection.id = 'flex'
    
    
    {
        let dcards = document.createElement('div')
        dcards.id = 'cards'
        square.appendChild(dcards)
    
        let dphone = document.createElement('div')
        dphone.id = 'phone'
        dcards.appendChild(dphone)
    
        let imgphone = document.createElement('img')
        dphone.appendChild(imgphone)
        imgphone.src = "../IMG1/home (1).png"
        imgphone.id = 'imgphone'
    
        let h3 = document.createElement('h3')
        h3.id = 'h3'
        h3.innerHTML = "ارتاح وسلمنا الجوال"
        dcards.appendChild(h3)
    
        let dprice = document.createElement('div')
        dprice.id = 'price'
        dcards.appendChild(dprice)
    
        let p1 = document.createElement('p')
        p1.id = "p1"
        p1.innerHTML = "نخدمك وأنت في مكانك وبدل ماتطلع وتمشور عمرك بين المحلات عشان تصلح جوالك"
        dprice.appendChild(p1)
    }
{
    {
        let dcards = document.createElement('div')
        dcards.id = 'cards'
        square.appendChild(dcards)
    
        let dphone = document.createElement('div')
        dphone.id = 'phone'
        dcards.appendChild(dphone)
    
        let imgphone = document.createElement('img')
        dphone.appendChild(imgphone)
        imgphone.src = "../IMG1/test.png"
        imgphone.id = 'imgphone'
    
        let h3 = document.createElement('h3')
        h3.id = 'h3'
        h3.innerHTML = "خدمة مخصصة"
        dcards.appendChild(h3)
    
        let dprice = document.createElement('div')
        dprice.id = 'price'
        dcards.appendChild(dprice)
    
        let p1 = document.createElement('p')
        p1.id = 'p1'
        p1.innerHTML = "يمكنك اختيار الخدمة التي تناسب احتياجاتك: إصلاح ذاتي أو خدمة إصلاح في الموقع."
        dprice.appendChild(p1)
    }
    {
        let dcards = document.createElement('div')
        dcards.id = 'cards'
        square.appendChild(dcards)
    
        let dphone = document.createElement('div')
        dphone.id = 'phone'
        dcards.appendChild(dphone)
    
        let imgphone = document.createElement('img')
        dphone.appendChild(imgphone)
        imgphone.src = "../IMG1/repair-tool.png"
        imgphone.id = 'imgphone'
    
        let h3 = document.createElement('h3')
        h3.id = 'h3'
        h3.innerHTML = "فحص توافق الأجزاء"
        dcards.appendChild(h3)
    
        let dprice = document.createElement('div')
        dprice.id = 'price'
        dcards.appendChild(dprice)
    
        let p1 = document.createElement('p')
        p1.id = 'p1'
        p1.innerHTML = "ميزة تتحقق من توافق الأجزاء المختارة مع نموذج الهاتف لدى المستخدم قبل الشراء."
        dprice.appendChild(p1)
    }
    {
        let dcards = document.createElement('div')
        dcards.id = 'cards'
        square.appendChild(dcards)
    
        let dphone = document.createElement('div')
        dphone.id = 'phone'
        dcards.appendChild(dphone)
    
        let imgphone = document.createElement('img')
        dphone.appendChild(imgphone)
        imgphone.src = "../IMG1/catalogue (1).png"
        imgphone.id = 'imgphone'
    
        let h3 = document.createElement('h3')
        h3.id = 'h3'
        h3.innerHTML ="كتالوج لقطع الغيار"
        dcards.appendChild(h3)
    
        let dprice = document.createElement('div')
        dprice.id = 'price'
        dcards.appendChild(dprice)
    
        let p1 = document.createElement('p')
        p1.id = 'p1'
        p1.innerHTML = " كتالوج شامل لمجموعة متنوعة من قطع إصلاح الاجهزة، مصنفة حسب العلامة التجارية، والموديل، ونوع الجزء";
        dprice.appendChild(p1)
    }
}
}