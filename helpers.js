import store from './store'

const isItemInFavorite = ( item ) => {
    const { favorites } = store.getState()
    const ind =  favorites.findIndex( ele => ele.id === item.id )
    return ind === -1 ? false : true
}

const flattenQueryData = (data) => data.pages.flatMap( page => page.results )


export { isItemInFavorite, flattenQueryData }