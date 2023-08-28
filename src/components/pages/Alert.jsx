import { useContext } from "react"
import AlertContext from "../context/alert/AlertContext"


/**
 * // it's the code if you were not using alertcontext file
function Alert({msg}) {
    return (
        <div>
        ALERT : {msg}
        </div>
        )
    }
*/
/**
 * what is happening here?
  1. SearchBox component is calling function (setAlert) in context file
  2. in AlertContext file we are calling the reducer function alertReducer
  3. so the reducer function updates the state by returning
  4. then the Context file will get re-rendered
  5. values there will be exported
  6. the components wrapped by AlertContext, one of them is Alert.jsx i.e. this file (indirectly)
  7. so this file will also get re-rendered
  
  CONCLUSION: setting message in SearchBox will indirecly 
              re-render Alert 
              and also the message written in SearchBox can be accessed
  */
function Alert() {
    const { alert } = useContext(AlertContext)
    return (
        // make sure to write alert!== null, otherise you may be trying to access null.msg 
        <h3>{alert!== null &&  alert.msg}</h3>
    )
}

export default Alert
