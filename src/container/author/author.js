import { useDispatch, useSelector } from 'react-redux';
import { deleteAuthor } from '../../store/redusers/authorRedus'
import View from './modals/view'
import Edit from './modals/edit'
import Delete from './modals/delete'
import Push from './modals/push'
const Author = () => {
    const dispach = useDispatch();
    const authorList = useSelector(state => state.author.author)
    const deleteAuthorFN = (id) => {
        dispach(deleteAuthor(id))
    }
    if (authorList.length === 0) {
        return (<h3>Загрузка...</h3>)
    }
    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {authorList.map((item, key) => (
                            <tr key={key + Date.now()}>
                                <td>{item.last_name}</td>
                                <td>{item.first_name}</td>
                                <td>
                                    <View author={item} />
                                    <Edit author={item} />
                                </td>
                                <td>
                                    <Delete author={item} deleteAuthor={deleteAuthorFN} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Push />
        </>
    )
}

export default Author