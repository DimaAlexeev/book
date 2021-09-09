import Main from './main/main'
import { Route, Switch } from 'react-router-dom'
import Books from './books/books'
import Author from './author/author'
import {memo} from 'react'
const container = () => {
    return (
        <div className="container">
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/author' component={Author} />
                    <Route exact path='/books' component={Books} />
                </Switch>
        </div>
    )
}
export default memo(container);