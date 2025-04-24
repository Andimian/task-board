import styles from './dateDisplay.module.scss';

export const DateDisplay = () => {
    const date = new Date();

    // Это гибкая альтернатива toLocaleDateString. В данном случае нужен чтобы показывать
    // только цифры текущего года (без "г.")
    const formatter = new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
    });
    const parts = formatter.formatToParts(date);

    const month = parts.find(p => p.type === 'month')?.value;
    const year = parts.find(p => p.type === 'year')?.value;

    const result = `${month} ${year}`;

    const capitalized = result.charAt(0).toUpperCase() + result.slice(1);

    return <span className={styles.date}>{capitalized}</span>;
};
