export default function FeedbackOptiops({ options }) {
    return (
        <div>
            {options.map(option => (
                <button
                    type='button'
                    key={option}
                    name={option}
                >
                    {option}
                </button>
            ))}
            
        </div>
    );  
}