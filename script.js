let current = 0;

let score = {
  cute: 0,
  spicy: 0,
  dramatic: 0
};
  

const questions = [
  {
    text: "คุณชอบความสัมพันธ์แบบไหน?",
    choices: [
      { text: "อบอุ่น น่ารัก", type: "cute" },
      { text: "ตีกันเก่ง เคมีแรง", type: "spicy" },
      { text: "ขมแต่ไม่คาย", type: "dramatic" },
      { text: "ซับซ้อน มีปม", type: "smart" }
    ]
  },
  {
    text: "เวลาเห็นฉากหวาน คุณจะ…",
    choices: [
      { text: "เขินตัวบิด", type: "cute" },
      { text: "กรี๊ดลั่นบ้าน", type: "spicy" },
      { text: "น้ำตาซึม", type: "dramatic" },
      { text: "วิเคราะห์สายตา ท่าทาง", type: "smart" }
    ]
  },
  {
    text: "ถ้าตัวละครทะเลาะกัน…",
    choices: [
      { text: "ขอให้คืนดีกันไวๆ", type: "cute" },
      { text: "ยิ่งตีกันยิ่งมันส์", type: "spicy" },
      { text: "เจ็บมาก แต่ก็ยังตามอ่าน", type: "dramatic" },
      { text: "อาจจะมีเหตุผลที่ทำให้ทะเลาะกัน ลองดูไปก่อน", type: "smart" }
    ]
  },
  {
    text: "คุณชอบ trope แบบไหน?",
    choices: [
      { text: "เพื่อนสนิทคิดไม่ซื่อ", type: "cute" },
      { text: "enemy to lover", type: "spicy" },
      { text: "รักต้องห้าม", type: "dramatic" },
      { text: "complicated relationship (ความสัมพันธ์ซับซ้อน)", type: "smart" }
    ]
  },
  {
    text: "เวลาฟิน คุณจะ…",
    choices: [
      { text: "ยิ้มไม่หุบ หน้าบานเป็นกระด้ง", type: "cute" },
      { text: "กรี๊ดและตบโต๊ะ", type: "spicy" },
      { text: "ร้องไห้เพราะอิน", type: "dramatic" },
      { text: "เก็บรายละเอียด", type: "smart" }
    ]
  },
  {
    text: "แนวที่คุณอ่านบ่อย?",
    choices: [
      { text: "หวานๆ", type: "cute" },
      { text: "ร้อนแรง", type: "spicy" },
      { text: "ดราม่า", type: "dramatic" },
      { text: "จิตวิทยา", type: "smart" }
    ]
  },
  {
    text: "คุณอินกับอะไรที่สุด?",
    choices: [
      { text: "moment เล็กๆ", type: "cute" },
      { text: "เคมีระหว่างตัวละคร", type: "spicy" },
      { text: "ความเจ็บปวด ปมที่ถูกผูกไว้", type: "dramatic" },
      { text: "พัฒนาการตัวละคร", type: "smart" }
    ]
  }
];


function showQuestion() {
  const q = questions[current];

  document.getElementById("app").innerHTML = `
    <h2>${q.text}</h2>
    ${q.choices.map(c => 
      `<button onclick="choose('${c.type}')">${c.text}</button>`
    ).join("")}
  `;
}

function choose(type) {
  score[type]++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function choose(type) {
  score[type]++;   
  current++;      

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let result = "cute";

  if (score.spicy > score.cute) result = "spicy";
  if (score.dramatic > score.cute) result = "dramatic";

  const resultData = {
    cute: {
      title: "🧁 สายละมุน",
      emoji: "🥺💗🌸",
      desc: "คุณคือสายละมุนตัวจริง ชอบความสัมพันธ์อบอุ่น น่ารัก ฟีลกุ๊กกิ๊กเล็ก ๆ ก็ทำให้ใจฟูได้ทั้งวัน แค่ตัวละครมองตากันหรือมี moment นิดเดียว คุณก็สามารถยิ้มไม่หยุดแล้ว สำหรับคุณ ความรักไม่ต้องหวือหวา แค่สบายใจและอยู่ด้วยกันก็พอ💞"
    },
    spicy: {
      title: "💄 สายแซ่บ",
      emoji: "😈💥❤️‍🔥",
      desc: "คุณคือสายแซ่บตัวแม่! ยิ่งตีกันยิ่งมันส์ เคมีต้องแรง ฟีลต้องเดือด ศัตรูกันแล้วกลายเป็นคนรักคือที่สุด! ความสัมพันธ์เรียบๆ ไม่ใช่ทางของคุณ ต้องมี tension มีจิกกัด มีไฟลุก ถึงจะเรียกว่าฟิน🔥"
    },
    dramatic: {
      title: "💔 สายดราม่า",
      emoji: "🖤🌧️🥀",
      desc: "คุณอินกับความรักที่ลึกและเจ็บปวด ยิ่งมีปม ยิ่งมีน้ำตา ยิ่งอ่านต่อไม่หยุด คุณเข้าใจความรู้สึกตัวละครได้ดีมาก และพร้อมจะจมไปกับมันแบบเต็มใจ สำหรับคุณ ความรักที่สวยงามมักมาพร้อมความขมที่ไม่มีวันลืม🥀"
    },
    smart: {
      title: "🧠 สายวิเคราะห์",
      emoji: "📖🔍✨",
      desc: "คุณไม่ใช่แค่อ่าน แต่คุณมองทะลุความสัมพันธ์ คุณเก็บรายละเอียดเก่ง เห็นทั้ง subtext และพัฒนาการของตัวละคร คุณอาจจะไม่กรี๊ดเสียงดังแต่ในหัวคุณกำลังวิเคราะห์ทุกอย่างอยู่แบบจริงจังและนั่นแหละคือเสน่ห์ของคุณ✨"
    }
  };

  const r = resultData[result];
  document.getElementById("app").innerHTML = `
    <h1>${r.title}</h1>
    <div style="font-size:50px; text-align:center;">${r.emoji}</div>
    <p>${r.desc}</p>
    <button onclick="location.reload()">เล่นใหม่</button>
  `;
}
showQuestion();
