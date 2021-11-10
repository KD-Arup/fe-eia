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
export const getProjectByID = (project_id) => {
  return listApi.get(`/projects/${project_id}`)
  .then( ( {data} ) => {
    return data.project;
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
    return data.receptors;
  })
}

export const getCommentsByReceptorID = (receptor_id) => {
  return listApi.get(`/comments/receptor/${receptor_id}`)
  .then( ({data} ) => {
    if (data.comments) {
      return data.comments;
    } else {
      return  '';
    }
  })
  .catch(err => {
    console.dir(err)
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
export const postAssessmentArea = async (boundingPoly, project_id) => {
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
  const result = await listApi.post(`/assessment_areas`, assessmentAreaObj )
  return result;
}

export const initiatePublicApi = async (project_id) => {
  const publicApiResponse = await listApi.get(`/public_apis/${project_id}`)
  if (publicApiResponse.msg === 'OK' ) return true;
  else return false;
  
}


export const getCategories = () => {
  return listApi.get(`/public_apis`)
  .then( ( {data} ) => {
    return data.publicApis;
  })
  .catch(err => {
    console.dir(err);
  })
}