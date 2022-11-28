#TODO 

##General structure of the SPA 
Each navItem should get get its own Component to display data under the Navbar. There we fetch the data inside the component onMount I guess. 

###SearchInput 
    own Component that handles all searches?
    OR
    Integrate the searchInput in every Wrapping Component? 
        probably easier search Handling with different Store objects. 
        Otherwise every component needs to pass searchInput to this component, aswell as the whole list of things to search? 



Structure should look something like this: 
BerriesComponentVue 
    BerryCardVue 
        ? 

PokemonComponentVue 
    PokemonCardVue
        ?


EvolutionsComponent 
    EvolutionCardVue 
*does this make sense here to display Evolutions as cards?*

ItemsComponentVue  
    ItemCardVue 
        ? 


