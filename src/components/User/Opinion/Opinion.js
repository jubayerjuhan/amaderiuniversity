import React from 'react';
import { useForm} from 'react-hook-form';
import UserHeader from '../UserHeader/UserHeader';
import UserSidebar from '../UserSidebar/UserSidebar';


const Opinion = () => {
    const { register, handleSubmit, errors } = useForm();
    // const [rightAnswer, setRightAnswer] = useState([{ name: 'answer1', value: 'false' }, { name: 'answer2', value: 'false' }, { name: 'answer3', value: 'false' }, { name: 'answer4', value: 'false' },])
    // const [loading, setLoading] = useState(false);
    // const [dept, setDept] = useState([]);
    // document.title = "Enroll A Student";
    const name = sessionStorage.getItem('name')





    const onSubmit = data => {
        
        const finalData = {
            name: name,
            opinion: data.opinion
        }
        console.log(finalData)
                fetch('http://localhost:4200/addOpinion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData)
            })
                .then(response => response.json())
                .then(data => {
                    window.alert('Thanks For Your Opinion');
                    window.location.reload();
                })

                .catch(error => {
                    console.error(error)
                })
        
        // const checkData = rightAnswer.filter(ans => ans.value === 'true')
        // // console.log(checkData.length)
        // if (checkData.length === 0) {
        //     alert('Please Select A Right Answer')
        // }
        // else if (checkData.length > 1) {
        //     alert('Please Select Only One Answer')
        // }
        // else if (checkData.length === 1) {

        //     const rightValue = rightAnswer.filter(ans => ans.value === 'true')
        //     const ans = data[rightValue[0].name]
        //     // console.log(ans);
        //     const finalData ={
        //         question: data.question,
        //         rightAnswer: ans,
        //         answer:[data.answer1,data.answer2,data.answer3,data.answer4]
                
        //     }

        //     fetch('http://localhost:4200/addQuestion', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(finalData)
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             window.alert('Question added successfully');
        //             window.location.reload();
        //         })

        //         .catch(error => {
        //             console.error(error)
        //         })
        // }
        // const formData = new FormData();
        // formData.append('file', file);
        // formData.append('title', data.title);
        // formData.append('price', data.price);
        // formData.append('description', data.description);
        // formData.append('shortDescription', data.shortDescription);

        //  fetch('http://localhost:4200/addItem', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         window.alert('Item added successfully');
        //         window.location.reload();
        //     })

        //     .catch(error => {
        //         console.error(error)
        //     })


    }
    return (
        <div>
            <UserHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <UserSidebar />
                </div>
                <div style={{ backgroundColor: '#d6ffff', minHeight: '100vh'  }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Add Your Opinion</u></h2>
                    </div>
                    <div className="col-md-12">
                        <div><form className="p-3 container col-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-primary text-center">
                                <label for=""><b>Enter Your opinion here</b></label>
                                <input style={{ borderRadius: '15px', border: '2px solid #0000FF',height: '70px'}} type="text" ref={register({ required: true })} name="opinion" placeholder="Write your opinion here...." className="form-control" />
                                {errors.name && <span className="text-primary">This field is required</span>}
                            </div>

                            

                            <div className="form-group row">
                                <div className="form-group col-md-12 mt-4 pt-1 d-flex justify-content-center">
                                    <button type="submit" style={{ padding: '10px 90px', borderRadius: '40px' }} className="btn text-white btn-primary font-weight-bold">Submit</button>
                                </div>
                            </div>

                        </form></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Opinion;