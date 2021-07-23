
// export class NodeService {

//     getTreeTableNodes() {
//         return fetch('data.json').then(res => res.json())
//                 .then(d => d.root);
//     }

//     getTreeNodes() {
//         return fetch('data.json').then(res => res.json())
//                 .then(d => d.root);
//     }
// }
    
export class NodeService {

    getTreeTableNodes() {
        return fetch('data.json').then(res => res.json())
                .then(d => d.root);
    }

    getTreeNodes() {
        return fetch('data.json').then(res => res.json())
                .then(d => d.root);
    }
}
    