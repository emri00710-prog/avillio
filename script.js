let siteText = document.querySelectorAll(".container > * *")

siteText = Array.from(siteText).filter(item => (!item.innerText.includes("\n") || item.tagName == "P") && !item.innerText == "" && item.tagName != "LI") 

//це для ШІ
const text = siteText.map(item => item.innerText)

let textUa = [
  "Авіліо",
  "Чому Авіліо",
  "Рішення",
  "Спільнота",
  "Ціни",
  "Увійти",
  "Почати пробний період",
  "Усвідомлюйте, керуйте впевнено.",
  "Кожен відчуває стрес по-різному. Нехай Авіліо стане вашим провідником у персоналізованому щоденнику, щоб подолати стрес.",
  "Знайдіть свій шлях",
  "Як це працює",
  "Зрозумійте та позбудьтеся стресу за 3 кроки",
  "Авіліо пропонує стільки щоденників, скільки потрібно, охоплюючи різні сфери, такі як тривога, перевтома, сум або гнів, а також різноманітні особисті причини, щоб допомогти вам усвідомити свої емоції та навчити вас керувати стресом.",
  "01",
  "Персоналізація",
  "Пройдіть коротке опитування про те, як ви виражаєте себе, що викликає у вас стрес і над якою сферою ви хотіли б попрацювати. Таким чином ми зможемо повністю персоналізувати ваш щоденник!",
  "02",
  "Пишіть та розумійте",
  "Пишіть, малюйте, розмірковуйте, розумійте. Авіліо проведе вас через підказки та допоможе впоратися зі стресом!",
  "03",
  "Авіліо!",
  "Тепер ви усвідомлені і маєте спосіб керувати власним стресом та долати його. Чого ви чекаєте? Почніть з Авіліо вже сьогодні!",
  "Послухаймо історію успіху Кайли",
  "Подивіться, як ефективно Авіліо працює в реальному житті клієнта.",
  "Почнімо",
  "Наш продукт",
  "Ви розповідаєте про свій стрес — ми створюємо ваш щоденник",
  "Кожен стикається з цим по-різному. Дозвольте Авіліо вести вас через персоналізований досвід щоденника, щоб подолати ваш стрес.",
  "Знайдіть свій шлях",
  "Авіліо",
  "Чому Авіліо",
  "Рішення",
  "Спільнота",
  "Ціни"
]

let textEn = [
  "Avilio",
  "Why Alivio",
  "Solutions",
  "Community",
  "Pricing",
  "Sign in",
  "Start Trial",
  "Be aware, Manage well.",
  "Everyone experiences stress in different ways.\nLet Alivio guide you, in a personalized journal experience, to overcome your stress.",
  "Find Your Way",
  "How it works",
  "Understand & Release the stress in 3 steps",
  "Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.",
  "01",
  "Personalize",
  "Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!",
  "02",
  "Write & Understand",
  "Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!",
  "03",
  "Alivio!",
  "Now you are aware, and have a way to manage and overcome your own stress. What are you waiting for? Alivio today!",
  "Let's hear about Kayla's success story",
  "See how well Alivio works in a real customer’s life.",
  "Let’s get started",
  "Our product",
  "You tell us your stress, We make your diary",
  "Everyone experiences it, and in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.",
  "Find Your Way",
  "Alivio",
  "Why Alivio",
  "Solutions",
  "Community",
  "Pricing"
]

let trBtn = document.querySelector(".translate")
let trBtn2 = document.querySelector(".translate:nth-child(2)")
console.log(trBtn)

trBtn.addEventListener("click", translate)
trBtn2.addEventListener("click", translate2)

function translate() {
  siteText.forEach((item, index) => item.textContent = textUa[index])
}

function translate2() {
  siteText.forEach((item, index) => item.textContent = textEn[index])
}