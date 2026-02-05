import ListGroup from "./Components/ListGroup/";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { produce } from "immer";
import ExpandableText from "./Components/ExpandableText";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const [tags, setTags] = useState(['happy', 'exciting']);
  
  const [game, setGame] = useState({
    id: 1,
    player: {
      name:'John',
    },
  });

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1}
    ]
  });
  
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 6
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleQuantity = (id: number, amount: number) => {
    setCart({...cart, items: cart.items.map(item => {
      if (item.id === id){
        return {...item, quantity: Math.max(1, item.quantity + amount)};
      }
      return item;
    })});
  };

  const handlePizza = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
  };

  const handleEvent = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  const handleGame = () => {
    setGame({...game, player: {...game.player, name: 'Bob'}});
  };

  const handleTag = () => {
    //Add
    setTags([ ...tags, 'cheerful']);

    //Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    //Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  }


  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true} : bug))

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      }),
    );

    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, title: 'Error handling'} : bug))
  };

  const handlePrice = () => {
    // const newDrink = {
    //   ...drink,
    //   price : drink.price + 1
    // }
    // setDrink(newDrink);
    if (drink.price < 100){
      setDrink({...drink, price: drink.price + 1});
    } else {
      alert("Maximum price reached!!");
    }
  };

  return (
    <div>
      <BsFillCalendarFill />
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Submit</Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button> <br /> <br />
      {drink.price}
      <button onClick={handlePrice}>Change Price</button>
      <ExpandableText maxChars ={100}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit quia possimus consequuntur qui, error ea odit voluptatibus culpa fuga molestias eos non porro natus aliquid perferendis expedita adipisci vitae?
      Provident natus animi illum cum velit praesentium molestias? Id numquam, iusto veniam totam minus, sed fugiat ut architecto dolor, harum esse saepe consequuntur hic corporis distinctio mollitia incidunt quo ex?
      Possimus doloribus perspiciatis quia expedita aliquid veniam ad voluptas autem obcaecati voluptates amet maxime at perferendis exercitationem alias ducimus quae error voluptatem, eius reprehenderit, in blanditiis suscipit accusantium. Quia, cum.
      Nam eveniet quod tenetur esse asperiores ratione doloremque non blanditiis magnam deserunt vitae, atque saepe ut autem cum eos distinctio ad illo fuga ipsam odio? Nam, maxime explicabo? Necessitatibus, iusto!
      Cumque dolorem adipisci iure accusantium libero enim quos maxime molestias nostrum, dolor perferendis vero perspiciatis error voluptatum culpa voluptatem eos doloribus eligendi incidunt, dolores obcaecati sed. Saepe, numquam? Autem, quae.
      Corporis debitis ex illum perferendis, quo laborum deleniti ipsum optio aut eos unde maxime nemo quos numquam reiciendis omnis pariatur adipisci, dolorem officia quis libero recusandae distinctio! Libero, enim animi?
      Incidunt, sit dolor quos excepturi consequatur nostrum explicabo illo ex quasi vero iste aut? Fugiat aut est nisi ea repellendus cum et distinctio asperiores quas! Inventore, nam? Enim, perspiciatis minus.
      Saepe architecto totam iure alias porro eos repellat, eligendi labore fugit molestias repudiandae explicabo accusamus facere atque, mollitia vero nemo voluptates deleniti! Sequi necessitatibus veritatis, enim quisquam dignissimos voluptatem? Eaque!
      Sequi, modi unde, repellendus, quos deleniti iste cumque dicta maxime fugit consequuntur quis quo repellat assumenda aliquid pariatur omnis nobis sint architecto odit ipsum voluptas molestiae fuga quae. Voluptates, laborum?
      Minus veniam repellendus quas odio unde at, voluptatum eos quo dolores laudantium aliquid velit consequatur ea, numquam id debitis! Itaque repudiandae ex omnis laborum totam. Exercitationem maxime culpa aut quos.
      Velit voluptas delectus voluptates quibusdam illum voluptatum labore molestiae quo repudiandae doloremque atque architecto inventore natus nam dolore neque magni, asperiores, veritatis ducimus! Nulla vero suscipit ad sed id pariatur!
      Quod ipsam tenetur culpa aspernatur possimus excepturi aliquam quis explicabo quos consequatur corrupti eum voluptates molestiae officiis aperiam error praesentium, asperiores facilis? Voluptatibus, nesciunt. Voluptatibus at ex ut nobis veniam?
      Voluptatum voluptatibus iste in magni ipsum deserunt atque minima itaque non laboriosam ut error fugit delectus corrupti doloribus quae earum numquam ullam reiciendis asperiores, incidunt officiis. Veritatis quis beatae tempora?
      Error sint quod doloribus cupiditate odio dolorum dolores? Reprehenderit cum incidunt, minus inventore deserunt ex iste, perferendis illo, possimus maiores ducimus non excepturi quidem velit culpa. Nihil reprehenderit ipsam sapiente.
      Magni repellat recusandae eos eius est atque, et voluptates quasi illo sed unde similique quo repudiandae iusto, placeat accusamus officiis. Cum reiciendis voluptates adipisci praesentium ullam. Nihil facere exercitationem quia?
      Odio ipsum saepe aut illo soluta eos consequatur iste reprehenderit quae perferendis, quisquam aliquam alias atque quod. Saepe ducimus quae fugit, totam laborum libero exercitationem non atque vel, itaque ipsam!
      Velit nobis facere voluptates quis quasi minus nisi tenetur commodi expedita maxime culpa aperiam dolore ducimus iure nesciunt totam ut odio ratione, autem libero. Consequuntur neque aut incidunt voluptates assumenda.
      Consectetur corporis consequuntur assumenda alias. Expedita laudantium itaque qui nihil facilis velit neque cupiditate nesciunt earum accusantium temporibus tenetur harum sed, nemo, eos obcaecati aliquam et dolorem distinctio officiis esse!
      Harum eum fugit repellat nihil esse officia incidunt alias, qui iure sunt! Dolorem distinctio eligendi culpa fuga similique! Numquam fuga temporibus necessitatibus? Expedita, beatae nam at dicta itaque doloribus eum.
      Soluta architecto natus ullam, ut, iure aliquid illum magnam repudiandae corrupti dolor rem doloremque eos alias corporis esse perspiciatis ex qui, fugit fuga cumque hic quia nostrum! Sed, itaque asperiores?
      Recusandae dignissimos hic itaque eum voluptatibus minima laudantium autem possimus quo odit, dicta eveniet maxime sunt est dolores. Ipsam porro, voluptas eius culpa ut fuga tenetur cum. Cumque, dolores pariatur?
      Deleniti sapiente, tempore doloribus debitis quisquam beatae dicta? Sint ipsum sed inventore repudiandae nam delectus veritatis perspiciatis! Natus, suscipit. Sapiente impedit ab autem ex dolore harum odio incidunt voluptatum non.
      Sed labore numquam repellat expedita eveniet odio reprehenderit magni molestias mollitia, similique cum quod corrupti, iste libero amet sapiente, quas eos ab neque earum provident inventore laboriosam! Expedita, a quidem.
      Nobis hic mollitia accusamus consectetur dolores, asperiores optio architecto animi vero, unde reprehenderit? Molestias placeat fugit consequuntur non? Fugiat, eum. Amet soluta autem ut, laudantium placeat possimus deleniti nam dolores.
      Ipsa voluptatibus provident necessitatibus totam facilis sed consequatur, distinctio officiis unde atque eum voluptatum beatae porro voluptatem a dicta soluta at! Reprehenderit aliquid dolore natus molestias recusandae saepe beatae at?
      Optio distinctio est cumque harum reprehenderit voluptates quidem nulla commodi explicabo fugit necessitatibus numquam sapiente velit maiores, dolore aliquam enim eos voluptate asperiores modi nostrum eum magnam! Nesciunt, omnis at!
      Incidunt ut nobis, aliquid provident dolor optio. Voluptas amet veniam maxime asperiores repellendus nostrum ipsam deleniti in quas ad voluptates ab est veritatis inventore, provident quibusdam nemo totam molestiae labore!
      Quos, quia minus. Quo deserunt minima aliquid necessitatibus harum velit rem molestiae voluptatem iure, accusamus sed vitae sit? Veniam harum sit tempora officiis ullam esse, architecto qui laudantium maiores ab.
      Non corporis, similique, mollitia rerum id vel architecto voluptatem dolor facere, beatae officia! Assumenda impedit amet eius dolores tempora quibusdam! Ad omnis quis incidunt quo earum atque ab ipsa animi.
      Ex rem itaque commodi doloremque suscipit accusantium ipsa dicta illo facere. Velit commodi rerum praesentium dolor ea vero quisquam molestias neque non perspiciatis, vitae quo incidunt eius, sapiente accusamus laboriosam!
      Commodi asperiores neque dignissimos ipsa iure, reiciendis illum accusamus? Ipsum aliquam vel voluptatibus quae quas ex? Amet deleniti provident quis reiciendis, officiis iusto quos facilis nam debitis perferendis quas pariatur.
      Suscipit odio accusantium asperiores accusamus possimus nihil in iusto, adipisci architecto voluptas facere omnis magnam nulla quam consequatur, labore numquam, reprehenderit esse explicabo doloribus? Cupiditate in asperiores iure rerum harum!
      Vero facere nobis possimus doloremque illum corporis sed magni repudiandae, deserunt quia saepe earum, necessitatibus, dolorem quos quam fugiat vitae pariatur placeat nisi maiores non. Officia laboriosam voluptatibus itaque vitae.
      Nemo et ratione sed fugiat, maxime dolore optio cupiditate dignissimos exercitationem nulla repellat possimus alias iure? Provident similique mollitia quae delectus necessitatibus eveniet quibusdam natus! Ipsam repellat eaque rerum nobis.
      Tenetur ipsam cum dolorem alias officia pariatur, et odio neque possimus ullam cumque quam beatae vero quasi impedit dolore repellat nulla id voluptatem quis aspernatur laborum ut recusandae sequi. Minus.
      Delectus reiciendis quia debitis doloribus odit! Deserunt ex necessitatibus corporis, perspiciatis in, neque tempore aspernatur laborum, mollitia sed quae expedita unde voluptatibus eaque ad? Quam ipsa quisquam corporis. Maiores, esse?
      Minima voluptatibus assumenda quos culpa quod, nam animi commodi dolore. Voluptate blanditiis, saepe ipsam, aut perferendis excepturi debitis provident eaque ipsa mollitia aperiam necessitatibus doloribus temporibus earum at recusandae nihil!
      Dicta est blanditiis odit voluptatem, in cumque quasi incidunt optio? Cupiditate aperiam id delectus cum rerum laboriosam in eius adipisci vel sequi! Totam eaque amet sapiente dolore vero corrupti. Quod?
      Hic aliquid quasi earum, architecto, rem perferendis unde, quo saepe neque animi fugit pariatur. Temporibus dicta dolor, ipsa facilis explicabo totam similique deserunt quia velit odit inventore porro adipisci in.
      Ab quibusdam voluptate reprehenderit eius at autem vel, explicabo minus dignissimos est, soluta, ipsam distinctio impedit illo praesentium error voluptatibus velit sed. Consequuntur, inventore dignissimos. Natus commodi rem nemo facilis.
      Reprehenderit, esse! Vel sapiente, labore unde veniam mollitia omnis ab. Voluptatibus sapiente ut odit repudiandae tempora tenetur, enim dignissimos maxime sint aliquam dolorem voluptatem est molestias, reiciendis ex animi accusamus?
      Dicta, incidunt praesentium eum minus pariatur aliquam temporibus aliquid eveniet in unde sequi adipisci reiciendis fuga dolore excepturi delectus vitae repellat alias mollitia ullam nulla sit ipsa id. At, aut?
      Voluptatum suscipit est dolore quidem repudiandae ea neque labore deserunt, consequatur accusantium optio corporis quia unde inventore cupiditate repellat reiciendis ut in qui magni eos nemo debitis porro error! Nesciunt?
      Iusto repellat, excepturi rem eum non praesentium ut enim laborum, voluptatum maiores ea aut, totam sint officia quaerat dolor? Quos nemo natus molestiae dolorem, eos inventore ea magni distinctio iure.
      Perferendis quam velit repellat eum illo sit neque, molestias vero quod optio quidem dignissimos autem consectetur suscipit ex eaque qui alias voluptates impedit iure. Dicta quae dolorum tempore vero dolor.
      At distinctio quo ad itaque beatae quisquam officiis nam, excepturi, natus laborum dolore ex aspernatur dolor sit pariatur sequi autem consectetur corrupti dolores aliquam quibusdam atque voluptatibus tenetur placeat. Cumque!
      Dignissimos iusto aperiam magnam consectetur illum at quia minima veniam nam, dolorum debitis maxime placeat, enim accusamus. Eaque earum distinctio aliquam aspernatur. Nostrum cum voluptatum sapiente? Eos incidunt ut officiis.
      Veritatis repellat dolorem ad, pariatur necessitatibus a delectus tempora vel, molestiae expedita quibusdam magnam id soluta hic officiis obcaecati omnis ipsum veniam assumenda eligendi consectetur est qui. Iste, ea recusandae!
      Excepturi aliquam modi assumenda maxime maiores provident eius animi repellat voluptatibus! Modi vero ipsum quia facere ad ullam, alias ducimus maxime sequi adipisci cumque, est mollitia ratione nam nesciunt labore!
      Soluta, consequatur possimus quaerat minima odio maxime aperiam nostrum ipsa numquam fuga optio provident ullam temporibus eaque, explicabo adipisci ad fugiat magni. Ab consequatur earum doloribus voluptate eos reiciendis nostrum?</ExpandableText>
    </div>
  );
}

export default App;
