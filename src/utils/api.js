import axios from  'axios'
//import { AxiosResponse, AxiosError } from 'axios'


// TODO - need to change this with our actual URL
const listApi = axios.create({baseURL:`https://be-eia.herokuapp.com/api`})

export const getAllProjects = () => {
  return listApi.get(`/projects`)
  .then( ( {data} ) => {
    return data.projects;
  })
  .catch(err => {
    console.dir(err);
  })
}


export const postProject = (projectInfo) => {
  const projectObject = {
    project: {
      project_name : projectInfo.project_name,
      image_url : projectInfo.image_url
    }
  }
  console.log("project info sent through>>>>\n" ,projectObject)
  return listApi.post(`/projects`, projectObject)
  .then( ( {data} ) => {
    console.log('post data:')
    console.log(data);
  })
  .catch(err => {
    console.dir(err)
    //TODO - should redirect to error page here
  })
}


export const deleteProjectById = (project_id) => {
  return listApi.delete(`/projects/${project_id}`)
  .then (response => {
    console.dir(response)
  })
}

export const getReceptorsByProjID = (project_id) => {
  return listApi.get(`receptors/${project_id}`)
  .then( ( {data} ) => {
    // console.log(data.comments);
    return data.receptors;
  })
  // .catch(err => {
  //   //console.dir(err)
  //   //TODO - should redirect to error page here
  // })
}

export const getCommentsByReceptorID = (receptor_id) => {
  return listApi.get(`/comments/receptor/${receptor_id}`)
  .then( ({data}) => {
    if (data) {
      return data.comments;
    }
  })
}


export const postComment = (commentObj) => {
  // console.log(commentObj)
  return listApi.post(`/comments`, commentObj )
  .then( ( {data} ) => {
    console.log('comment response:')
     console.dir(data);
  })
}
export const postAssessmentArea = (boundingPoly, project_id) => {
  const assessmentAreaObj = {
    "assessment_area": {
      "project_id": Number(project_id),
      "geometry": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [boundingPoly]
            }
          }
        ]
      }
    }
  }
  console.log(assessmentAreaObj);
  return listApi.post(`/assessment_areas`, assessmentAreaObj )
  // .then( ( {data} ) => {
  //   // console.log('assessment area')
  //   // console.dir(data);
  //   return data;
  // })
  // .then(() => {
    // return initiatePublicAPIs()
  // })
  // .then((response) => {
  //   if (response) {
  //     return getReceptors(project_id)
  //     .then( (receptors) => {
  //       return receptors
  //     })
  //   } else {
  //     return {error message}
  //   }
  // })
  // .catch(err => {
  //   console.dir(err)
  //   //TODO - should redirect to error page here
  // })
}


// sendOffAssessmentArea(boundary, project_id)
// .then( data => {
//   //get back assesment areas
//   })
//   .then (() => {
//   initiatePublicApis( project_id )  //api/publicapis
//   // if boundary null, get receptor from db else get boundary
//   //back end
//   })
//   .then ((receptors) => {
//     //successful
//     getReceptors
//   })
//   .catch()

// /api/receptors/:project_id
//   if new assessment area as before?
//   