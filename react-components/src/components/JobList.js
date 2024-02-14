import React from 'react';

// function JobCard(props) {
//     //remember the image has to be closed and the 'class' needs to change to 'className'
//     return (
//         <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
//             <img src="img/SeattleTimes.jpg" alt="Seattle Times logo" />
//             <h3>Seattle Times: Paperboy</h3>
//         </div>
//     )
// }

// export function JobCardList(props) {
//     return (
//         <div id="class-cards" className="row">
//             <JobCard />
//             <JobCard />
//             <JobCard />
//             <JobCard />
//         </div>
//     )
// }

// //Slide 16 (props example)

// function JobCard(props) {
//     console.log(props);
//     const image = props.image;
//     const jobName = props.jobName;
//     const altTag = props.altTag

//     return (
//         <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
//             <img src={image} alt={altTag} />
//             <h3>{jobName}</h3>
//         </div>
//     )
// }

// export function JobCardList(props) {
//     return (
//         <div id="class-cards" className="row">
//             <JobCard image='img/SeattleTimes.jpg' altTag='SeattleTimes Logo' jobName='Seattle Times: Paperboy'/>
//             <JobCard image='img/MicrosoftLogo.jpg' altTag='Microsoft Logo' jobName='Microsoft: Softare Test Manager: Paperboy'/>
//             <JobCard image='img/arenasportslogo.jpg' altTag='ArenaSports Logo' jobName='Arena Sports:  Data Engineer'/>
//             <JobCard image='img/UWLogo.jpg' altTag='UW Logo' jobName='University of Washington: Guest Faculty Info340, CSS143, CSS107'/>
//         </div>
//     )
// }

// // Slide 18 : 1)use the json object to fill things out and 2) add logic to the component

// import COURSE_DATA from './course-data.json';


// function JobCard(props) {

//     const image = props.image;
//     const jobName = props.jobName;
//     const altTag = props.altTag

//     let classList = "card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"

//     //highlight a particular value
//     if (props.currentJob) {
//         classList += " bg-warning bg-gradient"
//     }

//     return (
//         <div className={classList}>
//             <img src={image} alt={altTag} />
//             <h3>{jobName}</h3>
//         </div>
//     )
// }

// export function JobCardList(props) {

//     console.log(COURSE_DATA);
//     return (
//         <div id="class-cards" className="row">
//             <JobCard image={COURSE_DATA[0].image} altTag={COURSE_DATA[0].altTag} jobName={COURSE_DATA[0].jobName}/>
//             <JobCard image={COURSE_DATA[1].image} altTag='Microsoft Logo' jobName='Microsoft: Softare Test Manager: Paperboy'/>
//             <JobCard image='img/arenasportslogo.jpg' altTag='ArenaSports Logo' jobName='Arena Sports:  Data Engineer' currentJob={true}/>
//             <JobCard image='img/UWLogo.jpg' altTag='UW Logo' jobName='University of Washington: Guest Faculty Info340, CSS143, CSS107' currentJob={true}/>
//         </div>
//     )
// }

// // Slide 20 - now use the json object to fill this out with mapping
// import COURSE_DATA from './course-data.json';

// function JobCard(props) {

//     const image = props.image;
//     const jobName = props.jobName;
//     const altTag = props.altTag

//     let classList = "card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"

//     //highlight a particular value
//     if (props.currentJob) {
//         classList += " bg-warning bg-gradient"
//     }

//     return (
//         <div className={classList}>
//             <img src={image} alt={altTag} />
//             <h3>{jobName}</h3>
//         </div>
//     )
// }

// export function JobCardList(props) {

//     //I want an array of elements
//     const componentArray = COURSE_DATA.map((jobObj) => {

//         const element = (
//             <JobCard image={jobObj.image} altTag={jobObj.altTag} jobName={jobObj.jobName} />
//         )
//         return element; //don't forget to return!
//     })

//     console.log(COURSE_DATA);
//     return (
//         <div id="class-cards" className="row">
//             {componentArray}
//         </div>
//     )
// }


// Slide 20A - Get rid of the key warning
import COURSE_DATA from './course-data.json';

function JobCard(props) {

    const image = props.image;
    const jobName = props.jobName;
    const altTag = props.altTag

    let classList = "card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"

    //highlight a particular value
    if (props.currentJob) {
        classList += " bg-warning bg-gradient"
    }

    return (
        <div className={classList}>
            <img src={image} alt={altTag} />
            <h3>{jobName}</h3>
        </div>
    )
}

export function JobCardList(props) {

    //I want an array of elements, but need to add a key with a unique value
    const componentArray = COURSE_DATA.map((jobObj) => {

        const element = (
            <JobCard
                image={jobObj.image}
                altTag={jobObj.altTag}
                jobName={jobObj.jobName}
                key={jobObj.jobName} />
        )
        return element; //don't forget to return!
    })

    console.log(COURSE_DATA);
    return (
        <div id="class-cards" className="row">
            {componentArray}
        </div>
    )
}