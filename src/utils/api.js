//import axios from  'axios'
//import { AxiosResponse, AxiosError } from 'axios'


// TODO - need to change this with our actual URL
//const listApi = axios.create({baseURL:`https://be-nc-news-testing.herokuapp.com/api`})

export const postProject = (projectInfo) => {
  // TODO - may have to edit the keys on this object to match API keys.
  const projectObject = {"project_name" : projectInfo.projTitle,
                         "project_type" : projectInfo.projType,
                          "job_number" : projectInfo.jobNo}
  console.log("project info sent through>>>>\n" ,projectObject)
  //return listApi.post(`ADD REST OF URL HERE`, projectObject)
  // .then( ( {data} ) => {
  // })
  // .catch(err => {
  //   //console.dir(err)
  //   //TODO - should redirect to error page here
  // })
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