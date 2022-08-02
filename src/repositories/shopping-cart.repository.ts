import { ShoppingCart } from "models/shopping-cart.model";
import { MongoDB } from "../utils/mongodb.utils";


export class ShoppingCartRepository extends MongoDB<ShoppingCart>  {
    protected collection = 'shopping-cart';

    public async getCartByUserId( userId: string ): Promise<ShoppingCart | null> {
        const result = await this.getDocuments( { userId } );
        return result?.length > 0 ? result[0] : null;
      }
}