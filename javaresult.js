// ดึงข้อมูลจาก localStorage
const allInput = localStorage.getItem(".form1 input");


// แสดงผลข้อมูล
const outputDiv = document.getElementById("output");
if (name && email && phonenumber) {
  outputDiv.innerHTML = `
    <p><strong>ชื่อ:</strong> ${name}</p>
    <p><strong>อีเมล:</strong> ${email}</p>
    <p><strong>ความคิดเห็น:</strong> ${phonenumber}</p>
  `;
} else {
  outputDiv.innerHTML = "<p>ไม่มีข้อมูลที่แสดง</p>";
}

// ปุ่มกลับ
function goBack() {
  window.location.href = "index.html"; // กลับไปยังหน้าแรก
}