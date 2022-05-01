import { ADD_TODO} from "./action";
const init ={ todos:[]}
export const todosReduser =(store=init ,{type,payload
})=>{
 switch(type){
    
         case ADD_TODO:
            //  return{ ...store,todos:[...store.todos, payload]}
            return{ ...store,todos:payload}
         default:
             return store;
        
 }   
}