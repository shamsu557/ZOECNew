document.getElementById('generateBtn').addEventListener('click', async function () {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const phone1 = document.getElementById('phone1').value;
    const phone2 = document.getElementById('phone2').value;
    const phone3 = document.getElementById('phone3').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const company = document.getElementById('company').value;
    const address = document.getElementById('address').value;
    const imageFile = document.getElementById('image').files[0];

    if (!name || !position || !phone1 || !email || !company || !address || !imageFile) {
        alert('Please fill out all required fields!');
        return;
    }

    // Convert the image file to a base64 string
    const imageBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
    });

    // Create a contact page URL
    const contactPage = `
<!DOCTYPE html>
<html>
<head>
    <title>${name} - Contact</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; }
        .container { padding: 20px; max-width: 600px; margin: auto; }
        img { border-radius: 50%; width: 150px; height: 150px; margin-bottom: 20px; }
        h1 { color: #333; }
        p { margin: 10px 0; font-size: 16px; }
        a { color: #007bff; text-decoration: none; font-size: 16px; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <img src="${imageBase64}" alt="Profile Image">
        <h1>${name}</h1>
        <p><strong>${position}</strong></p>
        <p>${company}</p>
        <p>${address}</p>
        <p><a href="tel:${phone1}">Call: ${phone1}</a></p>
        ${phone2 ? `<p><a href="tel:${phone2}">Call: ${phone2}</a></p>` : ''}
        ${phone3 ? `<p><a href="tel:${phone3}">Call: ${phone3}</a></p>` : ''}
        <p><a href="mailto:${email}">Email: ${email}</a></p>
        ${website ? `<p><a href="${website}" target="_blank">Visit Website</a></p>` : ''}
    </div>
</body>
</html>
    `;

    // Generate the QR code
    const qr = new QRious({
        element: document.getElementById('qrCode'),
        value: `data:text/html;charset=utf-8,${encodeURIComponent(contactPage)}`,
        size: 200,
    });

    document.getElementById('qrText').textContent = 'Scan the QR code to view the contact page.';
});