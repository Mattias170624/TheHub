import { collection, getDocs } from "@firebase/firestore";
import db from "../Firebase/firebase";

export async function getMobileProjects() {
  const documentsSnapshot = await getDocs(collection(db, "mobileProjects"));
  let projectObjectArray = [];

  documentsSnapshot.forEach((doc) => {
    const newObject = {
      title: doc.data().title,
      desc: doc.data().desc,
      link: doc.data().link,
      icons: doc.data().icons,
    };

    projectObjectArray.push(newObject);
  });

  return projectObjectArray;
}

export async function getWebProjects() {
    const documentsSnapshot = await getDocs(collection(db, "webProjects"));
    let projectObjectArray = [];
  
    documentsSnapshot.forEach((doc) => {
      const newObject = {
        title: doc.data().title,
        desc: doc.data().desc,
        link: doc.data().link,
        icons: doc.data().icons,
      };
  
      projectObjectArray.push(newObject);
    });
  
    return projectObjectArray;
  }

  export async function getOtherProjects() {
  const documentsSnapshot = await getDocs(collection(db, "otherProjects"));
  let projectObjectArray = [];

  documentsSnapshot.forEach((doc) => {
    const newObject = {
      title: doc.data().title,
      desc: doc.data().desc,
      link: doc.data().link,
      icons: doc.data().icons,
    };

    projectObjectArray.push(newObject);
  });

  return projectObjectArray;
}
