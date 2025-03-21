export const DateDisplay = () => {
    const dateStr = new Date().toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long"
    });
    const capitalized = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

    return <span>{capitalized}</span>;
};
