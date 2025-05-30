
function verifyCert() {
  const certNumber = document.getElementById("certInput").value.trim();
  const result = document.getElementById("result");
  const data = certData[certNumber];
  if (data) {
    result.innerHTML = `<strong>Name:</strong> ${data.name}<br><strong>Course:</strong> ${data.course}<br><strong>Date:</strong> ${data.date}`;
  } else {
    result.innerHTML = "<span style='color:red;'>Certificate not found. Please check the number and try again.</span>";
  }
}
document.getElementById("certInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") verifyCert();
});
