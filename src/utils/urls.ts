const token = "5626317023:AAGnKSVpx69mi7u1FI23XokKvq6i22OWXUY";
const chat_id = 5193911535;

export const telegramUrl = (message: string): string =>
    token &&
    chat_id &&
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;
