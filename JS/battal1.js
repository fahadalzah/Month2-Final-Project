window.addEventListener("load", function () {

    let main=document.getElementById("main")
    let heroBox=document.getElementById("hero-box");

    let heroHeading = document.createElement("h1");
    let heroDesc = document.createElement("p");

    heroHeading.innerHTML= " جميع الطلاب معاً نحو تطوع";
    heroHeading.id="hero-heading"

    heroDesc.innerHTML= "العمل التطوعي سمة المجتمعات الحيوية، لدوره في تفعيل طاقات المجتمع، وإثراء الوطن بمنجزات أبنائه وسواعدهم. عبر منصة العمل التطوعي يمكنك أن تتطوع، في المكان، والزمان، والمجال الذي يناسب خبراتك ومهاراتك، كما تتيح لك المنصة توثيق ساعاتك وإصدار شهاداتك التطوعية. كن جزءًا من رؤية المملكة 2030 وانضم إلى ركب المليون متطوع."
    heroDesc.id= "hero-desc";

    main.appendChild(heroBox);
    heroBox.appendChild(heroHeading);
    heroBox.appendChild(heroDesc);
})

