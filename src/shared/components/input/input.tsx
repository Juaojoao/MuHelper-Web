import '../input/style.css'

type props = {
    name: string,
    type: string,
    placeholder: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputShared = ({name, placeholder, type, onChange}: props) => {
    return (
        <div className='input-div-control'>
            <input
                className="input-control"
                name={name}
                id={name}
                type={type}
                required
                onChange={onChange}
            />
            <label htmlFor={name} className='input-label-control'>{placeholder}</label>
        </div>
    );
}

export default InputShared;