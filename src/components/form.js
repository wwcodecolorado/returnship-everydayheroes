import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import formStyles from './form.module.scss'

//This RegEx(regular expression) can easily check whether a user has entered something that looks like a valid US phone number.
const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// Using lib YUP here to validate the rest of the form inputs. 
// Specifying if a input is required and what message is displayed if validation fails.  
const ShareYourStorySchema = Yup.object().shape({
    fullName: Yup.string().required(' Please enter your full name'),
    location: Yup.string().required(' Please enter your location'),
    email: Yup.string().email('Must be a valid email address').required('Please enter your email'),
    phone: Yup.string().matches(phoneRegExp, {message: 'Phone number is not valid', excludeEmptyString:true }).required('Please enter your phone'),
    story: Yup.string().required('Please enter your story that features an everyday hero'),

  });

export default function StoryForm() {
  const { register, errors, handleSubmit } = useForm({
  validationSchema: ShareYourStorySchema
  });
  const onSubmit = data => {
    // use this to test out form locally
    //alert(JSON.stringify(data));
    // data-netlify="true" on the form field below ensures submit is sent to netlify 
  };

  return (
      <div className={formStyles.row}>
        <div className={formStyles.flex_container}>

            <form onSubmit={handleSubmit(onSubmit)} name="share-your-story" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" aria-label= "Hidden botfield input" />
            <input type="hidden" name="form-name" value="share-your-story" aria-label= "Hidden form name "/>

            <h3 className={formStyles.logo_title}>SHARE YOUR STORY</h3>

            <div className={formStyles.row} >
                <div className={formStyles.col_50}>
                    <div className="Fullname_area">
                        <label htmlFor="fullName"> Full Name</label>
                        <input 
                        type="text" 
                        className="fullName" 
                        name="fullName"
                        id = "fullName" 
                        placeholder="Jane Smith" 
                        ref={register} 
                        aria-label="Enter your full name"/>
                        {errors.fullName && <p className={formStyles.error_text}>{errors.fullName.message}</p>}
                    </div>
                    
                    <div className="Location_area">
                        <label htmlFor="location">Location</label>
                        <input 
                        type="text" 
                        name="location" 
                        id="location" 
                        placeholder = " Denver, CO" 
                        ref={register} 
                        aria-label="Enter your location"/>
                        {errors.location && <p className={formStyles.error_text}>{errors.location.message}</p>}
                    </div>
                </div>
            
                <div className={formStyles.col_50}>
                    <div className="Email_area">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="janesmith@email.com" 
                        ref={register}
                        aria-label="Enter your email"/>
                        {errors.email && <p className={formStyles.error_text}>{errors.email.message}</p>}
                    </div>
                    <div className="Phone_area">
                        <label htmlFor="phone">Phone Number </label>
                        <input 
                        type="tel" 
                        name="phone" 
                        placeholder="123 456 5555" 
                        ref={register} 
                        aria-label= "Enter your phone number"/>
                        {errors.phone && <p className={formStyles.error_text}>{errors.phone.message}</p>}
                    </div>
                </div>

                </div>

                <div className="Zoom_area">
                    <label htmlFor="zoom-option">Are you willing to share your story over zoom?</label>
                    <select 
                    className={formStyles.select_css} 
                    name="zoom-option" 
                    id="zoom-option" 
                    defaultValue="undecided" 
                    ref={register} >
                        <option value= "undecided" >Undecided</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="Story_area">
                    <label htmlFor="story">Share your story...</label>
                    <textarea 
                    name="story" 
                    id="story" 
                    rows="6" 
                    placeholder="My story..." 
                    ref={register} 
                    aria-label= " Enter your everyday hero COVID19 Story" />
                    {errors.story && <p className={formStyles.error_text}>{errors.story.message}</p>}
                </div>

            

                <div className="actions">
                <input type="submit" value="Submit" className="special" aria-label= "submit your share story form" />
                </div>


            </form>

        </div>
    </div>
  );
}

