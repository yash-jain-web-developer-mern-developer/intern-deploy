import styles from "./FormFieldEmpty.module.css";
import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
const FormFieldEmpty = () => {
   const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
     if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
    if(formData.name.trim() !== '' && formData.email.trim() !== ''){
    
      setIsFormValid(true);
    }
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Enter a valid email address' });
    } else {
      // Submit the form data
    
     navigate("/success")
      // Reset form fields and errors
      setFormData({ name: '', email: '' });
      setErrors({});
      setIsFormValid(false); 
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  return (
    <div className={styles.formFieldEmpty}>
      <img className={styles.path70Icon} alt="" src="/path70.svg" />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <img className={styles.image32315Icon} alt="" src="/image-32315@2x.png" />
      <img className={styles.image32510Icon} alt="" src="/image-32510@2x.png" />
      <section className={styles.combiner}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-1261155216.svg"
          />
          <div className={styles.formContainer}>
            <div className={styles.close}>
            <Link to="/" className={styles.close}>
              <img className={styles.vectorIcon} alt="" />
             
              <img className={styles.closeIcon} alt="" src="/vector-1.svg" />
           
              <img
                className={styles.closeIcon1}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sidePanel}>
          <div className={styles.formPanelParent}>
            <div className={styles.formPanel}>
              <h2 className={styles.registrationForm}>Registration Form</h2>
              <h1 className={styles.startYourSuccess}>
                Start your success Journey here!
              </h1>
            </div>
            <form className={styles.inputArea} onSubmit={handleSubmit}>
              <div className={styles.inputFieldLabels}>
                <div className={styles.inputLabels}>
                  <input
                    className={styles.enterYourName}
                    placeholder="Enter your name"
                    type="text"
                    name="name"
              value={formData.name}
              onChange={handleChange}
                  />
                </div>
                <div className={styles.inputLabels1}>
                  <input
                    className={styles.enterYourEmail}
                    placeholder="Enter your email"
                    type="text"
                    name="email"
              value={formData.email}
              onChange={handleChange}
                  />
                 
                </div>
                {errors.email && <div className={styles.error}><img
                  className={styles.errorIcon}
                  src="/error-icon.png"
                  alt="Error Icon"
                />
{errors.email}</div>}
              </div>
          
              <button className={styles.submitButtonArea}  type="submit"
          disabled={!isFormValid}>
              
             <div className={styles.submit}>Submit</div>
          
               </button>
              
            </form>
          </div>
        </div>
      </section>
      <img
        className={styles.formFieldEmptyChild}
        alt=""
        src="/group-1171281438@2x.png"
      />
      <div className={styles.background}>
        <img className={styles.maskGroupIcon} alt="" />
      </div>
    </div>
  );
};

export default FormFieldEmpty;
