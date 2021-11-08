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

export const getTableDataByProjID = (project_id) => {
  
  console.log("project_id sent through>>>>\n", project_id)
  // return listApi.get(`project/${project_id}`)
  // .then( ( {data} ) => {
  //   return data.project;
  // })
  // .catch(err => {
  //   //console.dir(err)
  //   //TODO - should redirect to error page here
  // })
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
  .then( ( {data} ) => {
    // console.log('assessment area')
    // console.dir(data);
    return data;
  })
  .catch(err => {
    console.dir(err)
    //TODO - should redirect to error page here
  })
}
