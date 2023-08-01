

function ThemeButton(){

const setdark =()=>{
    document.querySelector("body").setAttribute("theme", "dark")
}
const setlight =()=>{
    document.querySelector("body").setAttribute("theme", "light")
}

const switchTheme = (e)=>{
  if(e.target.checked) setdark();
  else setlight();
}

    return(
        <div className='dark_mode'>
        <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={switchTheme}
        />
        <label className='dark_mode_label' for='darkmode-toggle'>
        </label>
    </div>
       
    );
}

export default ThemeButton;