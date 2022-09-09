
export default function Api() {
    const apiKey = "238f6bbecd817b0849866bc3d0d8b987";
    const unit = "metric";
    const city = "Kyiv";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
}