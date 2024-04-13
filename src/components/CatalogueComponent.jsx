import catalogue from "../data/catalogue"
import { View, FlatList, Text } from "react-native"
import CatalogueItemComponent from "./CatologueItemComponent"

const CatalogueComponent = () => {
    return (
        <FlatList 
            data={catalogue}
            ItemSeparatorComponent={<Text></Text>}
            renderItem={({ item: vehicle }) => (
               <CatalogueItemComponent {... vehicle} />
            )}
        />
    )
}

export default CatalogueComponent