import '../styles/Checkout.scss'


export function CheckoutInput(props:any){
    
  const { label,errorMessage, onChange, id, ...inputProps} = props;

    return(
        <div className="form-input" >
            <label>{label}</label>
          <input {...inputProps} onChange={onChange}/>
          <span>{errorMessage}</span>
        </div>
    )
}