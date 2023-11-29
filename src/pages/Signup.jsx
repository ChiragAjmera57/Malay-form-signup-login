
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { validatePanNumber } from '../component/validatepan';
import { postMemberData } from '../component/signupreq';

export const Signup = () => {
    const memberData = {
        MemberID: 123,
        LoginName: "john_doe",
        Gender: "M",
        MaritalStatus: "M",
        MemberStateID: 5,
        MemberDistrictID: 72,
        MemberCityName: "Cityville",
        MemberBankID: 567,
        MemberBankBranch: "Cityville Branch",
        MemberBankACNo: "1234567890123456",
        MemberBankACType: "Savings",
        MemberBankIFSCCode: "ABC12345678",
        SponsorID: 9876,
        GroupID: 9876,
        GroupPosition: "M",
        CommandID: null,
        CreateBy: 0,
        CreateDate: null,
        CreateIP: null,
        UpdateBy: 0,
        UpdateDate: null,
        UpdateIP: null,
        RegType: "I",
        ProfilePhoto: "path/to/photo.jpg",
        MemberCode: "MEM123",
        GroupCode: "GRP987",
        SponsorCode: "SPR987",
        IsActive: true,
        IsPaid: null,
        date: 15,
        month: 8,
        year: 1990,
        TermNCondition: "Agreed",
      };
      
      
    const form = useForm()
    const  {register,control,handleSubmit,formState} = form
      const {errors} = formState
     const onSubmit = (data)=>{
        const req = {...memberData,...data}
        postMemberData(req).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
     }
    
      return(<div className="registration-form-container">
      <h1>Registration Form</h1>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label>Title:</label>
          <select name="title"  {...register("Title")}>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
          </select>
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            {...register("MemberName",{
                required:{
                    value:true,
                    message:"Member Name is required!"
                },
                
            })}
            maxLength={60}  
            
          />
          <p>{errors.MemberName?.message}</p>
        </div>
        <div className="form-group">
          <label>Father/Husband Title:</label>
          <select name="fatherHusbandTitle" {...register("FatherTitle")}>
            <option value="S/O">S/O</option>
            <option value="D/O">D/O</option>
            <option value="W/O">W/O</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor='FatherName'>Father/Husband Name:</label>
          <input
            type="text"
            {...register("FatherName",{
                required:{
                    value:true,
                    message:"Father Name is required!"
                },
            })}
            maxLength={60}  
          />
           <p>{errors.FatherName?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor='MemberAddress'>Address:</label>
          <input
            type="text"
            {...register("MemberAddress",{
                required:{
                    value:true,
                    message:"Address is required!"
                },
            })}
            maxLength={250}  
          />
          <p>{errors.MemberAddress?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor='MemberPinCode'>Pincode:</label>
          <input
            type="number"
            {...register("MemberPinCode",{
                required:{
                    value:true,
                    message:"Pin Code is required!"
                },
            })}
            maxLength={10}  
          />
          <p>{errors.MemberPinCode?.message}</p>
        </div>
       
        <div className="form-group">
          <label htmlFor='MobileNo'>Mobile no:</label>
          <input
            type="number"
            {...register("MobileNo",{
                required:{
                    value:true,
                    message:"Mobile no. is required!"
                },
            })}
            maxLength={10}  
          />
          <p>{errors.MobileNo?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor='EmailID'>Email:</label>
          <input
            type="email"
            {...register("EmailID",{
                pattern:{
                    value:'^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
                    message:'Enter a valid email'
                },
                required:{
                    value:true,
                    message:"Email is required!"
                },
            })}
            
          />
           <p>{errors.EmailID?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor='MemberPANNo'>Pan no:</label>
          <input
            type="text"
            {...register("MemberPANNo",{
                required:{
                    value:true,
                    message:"Pan no. is required!"
                },
                validate:(value)=>{
                    return validatePanNumber(value) || "Pan not valid"
                }
            })}
            
          />
          <p>{errors.MemberPANNo?.message}</p>
        </div>
       
        <div className="form-group">
          <label htmlFor='MemberAadharNo'>aadhar no:</label>
          <input
            type="number"
            {...register("MemberAadharNo",{
                validate:(value)=>{
                    return value.length===12||"Enter 12 digits"
                },
                required:{
                    value:true,
                    message:"Aadhar is required!"
                },
            })}
            maxLength={12}  
          />
          <p>{errors.MemberAadharNo?.message}</p>
        </div>
        <div className="form-group">
        <label htmlFor="BirthDate">Birth Date:</label>
        <input type="date" id="birthdate"{...register("BirthDate",{
            required:{
                value:true,
                message:"Dob is required!"
            },
        })} />
         <p>{errors.BirthDate?.message}</p>
        </div>
         
        <div className="form-group">
          <label htmlFor='NomineeName'>Nominee Name:</label>
          <input
            type="text"
            {...register("NomineeName",{
                required:{
                    value:true,
                    message:"Nominee Name is required!"
                },
            })}
            maxLength={50}  
          />
           <p>{errors.NomineeName?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor='NomineeRelation'>Nominee Relation:</label>
          <input
            type="text"
            {...register("NomineeRelation",{
                required:{
                    value:true,
                    message:"NomineeRelation is required!"
                },
            })}
            maxLength={50} 
          />
          <p>{errors.NomineeRelation?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor='LoginPwd'>Password:</label>
          <input
            type="password"
            {...register("LoginPwd",{
                required:{
                    value:true,
                    message:"Passwordd is required!"
                },
            })}
          />
          <p>{errors.LoginPwd?.message}</p>
        </div>
       
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  )
}
