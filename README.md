# 🧬 GeneGuard

> **Predict. Plan. Protect.**

<table>
  <tr>
    <td width="150" valign="middle">
      <img src="assets/GeneguardLOGO.png" alt="GeneGuard Logo" width="120" />
    </td>
    <td valign="middle">
      <h1>GeneGuard</h1>
      <p><strong>Predict. Plan. Protect.</strong></p>
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXZyYnJpZzJ2ZXJ2ZG5oYXJnZmVvenI1aGJmM2RzZDZ6czNuYTd2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BRL6dbUHLBDG47zYQj/giphy.gif" alt="DNA GIF" width="100%" />
</p>

---

### 🌟 About GeneGuard

**GeneGuard** is an intelligent AI-driven health-tech platform built to revolutionize how individuals assess and manage their genetic health risks.

By combining **AI** with **multi-generational family history**, GeneGuard empowers users to:

- 🔍 **Predict** their genetic disease risks
- 🧭 **Plan** actionable steps with tailored recommendations
- 🛡️ **Protect** their future health with early intervention

> Especially helpful in underserved or remote areas with limited access to genetic specialists.

---

### 🔍 Key Features

- 🧬 Predict risk for Diabetes, Cardiac, Cancer, etc.
- 📊 View personal risk dashboards and insights
- 🧠 AI-generated recommendations
- 👨‍👩‍👧 Track family medical history
- 🔒 Secure & encrypted data handling

---

### 🛠️ API Endpoint – `POST /api/predict-risk`

Use this endpoint to predict health risks based on personal and family data.

#### 📥 Request Example:

```json
{
  "userId": "123456",
  "age": 35,
  "gender": "female",
  "familyHistory": {
    "diabetes": true,
    "heartDisease": false
  },
  "lifestyle": {
    "smoking": false,
    "exercise": "regular"
  }
}
