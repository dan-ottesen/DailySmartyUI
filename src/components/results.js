import SearchBar from './searchBar';
 
 class Results extends Component {
+
+    handleSearchBarSubmit(query) {
+        console.log(query);
+    }
+
     render() {
         return (
             <div>
                 <Logo size={55}/>
-                <SearchBar/>
+                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
             </div>
         )
     }