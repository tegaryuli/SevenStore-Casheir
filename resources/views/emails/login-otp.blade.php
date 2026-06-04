<!DOCTYPE html>
<html>
<head>
    <title>Kode OTP Login</title>
</head>
<body style="font-family: sans-serif; background-color: #f3f4f6; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
        <h2 style="color: #333333; margin-top: 0;">Kode OTP Login Anda</h2>
        <p style="color: #666666;">Gunakan kode berikut untuk menyelesaikan proses login Anda. Kode ini berlaku selama 5 menit.</p>
        <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; border-radius: 4px; margin: 20px 0;">
            {{ $otp }}
        </div>
        <p style="color: #666666; font-size: 12px;">Jika Anda tidak meminta kode ini, abaikan email ini.</p>
    </div>
</body>
</html>
