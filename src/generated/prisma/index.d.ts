
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model productcategory
 * 
 */
export type productcategory = $Result.DefaultSelection<Prisma.$productcategoryPayload>
/**
 * Model productimage
 * 
 */
export type productimage = $Result.DefaultSelection<Prisma.$productimagePayload>
/**
 * Model size
 * 
 */
export type size = $Result.DefaultSelection<Prisma.$sizePayload>
/**
 * Model color
 * 
 */
export type color = $Result.DefaultSelection<Prisma.$colorPayload>
/**
 * Model productvariant
 * 
 */
export type productvariant = $Result.DefaultSelection<Prisma.$productvariantPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model orderItem
 * 
 */
export type orderItem = $Result.DefaultSelection<Prisma.$orderItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productcategory`: Exposes CRUD operations for the **productcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productcategories
    * const productcategories = await prisma.productcategory.findMany()
    * ```
    */
  get productcategory(): Prisma.productcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productimage`: Exposes CRUD operations for the **productimage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productimages
    * const productimages = await prisma.productimage.findMany()
    * ```
    */
  get productimage(): Prisma.productimageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.sizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.color`: Exposes CRUD operations for the **color** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.color.findMany()
    * ```
    */
  get color(): Prisma.colorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productvariant`: Exposes CRUD operations for the **productvariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productvariants
    * const productvariants = await prisma.productvariant.findMany()
    * ```
    */
  get productvariant(): Prisma.productvariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **orderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.orderItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    category: 'category',
    product: 'product',
    productcategory: 'productcategory',
    productimage: 'productimage',
    size: 'size',
    color: 'color',
    productvariant: 'productvariant',
    user: 'user',
    role: 'role',
    UserRole: 'UserRole',
    order: 'order',
    orderItem: 'orderItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "product" | "productcategory" | "productimage" | "size" | "color" | "productvariant" | "user" | "role" | "userRole" | "order" | "orderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      productcategory: {
        payload: Prisma.$productcategoryPayload<ExtArgs>
        fields: Prisma.productcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>
          }
          findFirst: {
            args: Prisma.productcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>
          }
          findMany: {
            args: Prisma.productcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>[]
          }
          create: {
            args: Prisma.productcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>
          }
          createMany: {
            args: Prisma.productcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productcategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>[]
          }
          delete: {
            args: Prisma.productcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>
          }
          update: {
            args: Prisma.productcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>
          }
          deleteMany: {
            args: Prisma.productcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productcategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>[]
          }
          upsert: {
            args: Prisma.productcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductcategory>
          }
          groupBy: {
            args: Prisma.productcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.productcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductcategoryCountAggregateOutputType> | number
          }
        }
      }
      productimage: {
        payload: Prisma.$productimagePayload<ExtArgs>
        fields: Prisma.productimageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productimageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productimageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>
          }
          findFirst: {
            args: Prisma.productimageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productimageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>
          }
          findMany: {
            args: Prisma.productimageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>[]
          }
          create: {
            args: Prisma.productimageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>
          }
          createMany: {
            args: Prisma.productimageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productimageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>[]
          }
          delete: {
            args: Prisma.productimageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>
          }
          update: {
            args: Prisma.productimageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>
          }
          deleteMany: {
            args: Prisma.productimageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productimageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productimageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>[]
          }
          upsert: {
            args: Prisma.productimageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productimagePayload>
          }
          aggregate: {
            args: Prisma.ProductimageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductimage>
          }
          groupBy: {
            args: Prisma.productimageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductimageGroupByOutputType>[]
          }
          count: {
            args: Prisma.productimageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductimageCountAggregateOutputType> | number
          }
        }
      }
      size: {
        payload: Prisma.$sizePayload<ExtArgs>
        fields: Prisma.sizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>
          }
          findFirst: {
            args: Prisma.sizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>
          }
          findMany: {
            args: Prisma.sizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>[]
          }
          create: {
            args: Prisma.sizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>
          }
          createMany: {
            args: Prisma.sizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>[]
          }
          delete: {
            args: Prisma.sizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>
          }
          update: {
            args: Prisma.sizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>
          }
          deleteMany: {
            args: Prisma.sizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>[]
          }
          upsert: {
            args: Prisma.sizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizePayload>
          }
          aggregate: {
            args: Prisma.SizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSize>
          }
          groupBy: {
            args: Prisma.sizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.sizeCountArgs<ExtArgs>
            result: $Utils.Optional<SizeCountAggregateOutputType> | number
          }
        }
      }
      color: {
        payload: Prisma.$colorPayload<ExtArgs>
        fields: Prisma.colorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.colorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.colorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>
          }
          findFirst: {
            args: Prisma.colorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.colorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>
          }
          findMany: {
            args: Prisma.colorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>[]
          }
          create: {
            args: Prisma.colorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>
          }
          createMany: {
            args: Prisma.colorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.colorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>[]
          }
          delete: {
            args: Prisma.colorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>
          }
          update: {
            args: Prisma.colorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>
          }
          deleteMany: {
            args: Prisma.colorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.colorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.colorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>[]
          }
          upsert: {
            args: Prisma.colorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorPayload>
          }
          aggregate: {
            args: Prisma.ColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColor>
          }
          groupBy: {
            args: Prisma.colorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.colorCountArgs<ExtArgs>
            result: $Utils.Optional<ColorCountAggregateOutputType> | number
          }
        }
      }
      productvariant: {
        payload: Prisma.$productvariantPayload<ExtArgs>
        fields: Prisma.productvariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productvariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productvariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>
          }
          findFirst: {
            args: Prisma.productvariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productvariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>
          }
          findMany: {
            args: Prisma.productvariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>[]
          }
          create: {
            args: Prisma.productvariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>
          }
          createMany: {
            args: Prisma.productvariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productvariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>[]
          }
          delete: {
            args: Prisma.productvariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>
          }
          update: {
            args: Prisma.productvariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>
          }
          deleteMany: {
            args: Prisma.productvariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productvariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productvariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>[]
          }
          upsert: {
            args: Prisma.productvariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productvariantPayload>
          }
          aggregate: {
            args: Prisma.ProductvariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductvariant>
          }
          groupBy: {
            args: Prisma.productvariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductvariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.productvariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductvariantCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      orderItem: {
        payload: Prisma.$orderItemPayload<ExtArgs>
        fields: Prisma.orderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          findFirst: {
            args: Prisma.orderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          findMany: {
            args: Prisma.orderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          create: {
            args: Prisma.orderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          createMany: {
            args: Prisma.orderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          delete: {
            args: Prisma.orderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          update: {
            args: Prisma.orderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          deleteMany: {
            args: Prisma.orderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          upsert: {
            args: Prisma.orderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.orderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: categoryOmit
    product?: productOmit
    productcategory?: productcategoryOmit
    productimage?: productimageOmit
    size?: sizeOmit
    color?: colorOmit
    productvariant?: productvariantOmit
    user?: userOmit
    role?: roleOmit
    userRole?: UserRoleOmit
    order?: orderOmit
    orderItem?: orderItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    childcategory: number
    productcategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childcategory?: boolean | CategoryCountOutputTypeCountChildcategoryArgs
    productcategory?: boolean | CategoryCountOutputTypeCountProductcategoryArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productcategoryWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productcategory: number
    productimage: number
    productvariant: number
    orderItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productcategory?: boolean | ProductCountOutputTypeCountProductcategoryArgs
    productimage?: boolean | ProductCountOutputTypeCountProductimageArgs
    productvariant?: boolean | ProductCountOutputTypeCountProductvariantArgs
    orderItem?: boolean | ProductCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productcategoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductimageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productimageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productvariantWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }


  /**
   * Count Type ProductimageCountOutputType
   */

  export type ProductimageCountOutputType = {
    productvariant: number
  }

  export type ProductimageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productvariant?: boolean | ProductimageCountOutputTypeCountProductvariantArgs
  }

  // Custom InputTypes
  /**
   * ProductimageCountOutputType without action
   */
  export type ProductimageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductimageCountOutputType
     */
    select?: ProductimageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductimageCountOutputType without action
   */
  export type ProductimageCountOutputTypeCountProductvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productvariantWhereInput
  }


  /**
   * Count Type SizeCountOutputType
   */

  export type SizeCountOutputType = {
    productvariant: number
  }

  export type SizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productvariant?: boolean | SizeCountOutputTypeCountProductvariantArgs
  }

  // Custom InputTypes
  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizeCountOutputType
     */
    select?: SizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountProductvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productvariantWhereInput
  }


  /**
   * Count Type ColorCountOutputType
   */

  export type ColorCountOutputType = {
    productvariant: number
  }

  export type ColorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productvariant?: boolean | ColorCountOutputTypeCountProductvariantArgs
  }

  // Custom InputTypes
  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorCountOutputType
     */
    select?: ColorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeCountProductvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productvariantWhereInput
  }


  /**
   * Count Type ProductvariantCountOutputType
   */

  export type ProductvariantCountOutputType = {
    orderItem: number
  }

  export type ProductvariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | ProductvariantCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * ProductvariantCountOutputType without action
   */
  export type ProductvariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductvariantCountOutputType
     */
    select?: ProductvariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductvariantCountOutputType without action
   */
  export type ProductvariantCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userRoles: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | RoleCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    categorystatus: number | null
    parentcategoryid: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    categorystatus: number | null
    parentcategoryid: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categorystatus: number | null
    image: string | null
    slug: string | null
    parentcategoryid: number | null
    isshow: boolean | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categorystatus: number | null
    image: string | null
    slug: string | null
    parentcategoryid: number | null
    isshow: boolean | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categorystatus: number
    image: number
    slug: number
    parentcategoryid: number
    isshow: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    categorystatus?: true
    parentcategoryid?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    categorystatus?: true
    parentcategoryid?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categorystatus?: true
    image?: true
    slug?: true
    parentcategoryid?: true
    isshow?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categorystatus?: true
    image?: true
    slug?: true
    parentcategoryid?: true
    isshow?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categorystatus?: true
    image?: true
    slug?: true
    parentcategoryid?: true
    isshow?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    categorystatus: number
    image: string | null
    slug: string | null
    parentcategoryid: number | null
    isshow: boolean
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categorystatus?: boolean
    image?: boolean
    slug?: boolean
    parentcategoryid?: boolean
    isshow?: boolean
    parentcategory?: boolean | category$parentcategoryArgs<ExtArgs>
    childcategory?: boolean | category$childcategoryArgs<ExtArgs>
    productcategory?: boolean | category$productcategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categorystatus?: boolean
    image?: boolean
    slug?: boolean
    parentcategoryid?: boolean
    isshow?: boolean
    parentcategory?: boolean | category$parentcategoryArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categorystatus?: boolean
    image?: boolean
    slug?: boolean
    parentcategoryid?: boolean
    isshow?: boolean
    parentcategory?: boolean | category$parentcategoryArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categorystatus?: boolean
    image?: boolean
    slug?: boolean
    parentcategoryid?: boolean
    isshow?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "categorystatus" | "image" | "slug" | "parentcategoryid" | "isshow", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentcategory?: boolean | category$parentcategoryArgs<ExtArgs>
    childcategory?: boolean | category$childcategoryArgs<ExtArgs>
    productcategory?: boolean | category$productcategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentcategory?: boolean | category$parentcategoryArgs<ExtArgs>
  }
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentcategory?: boolean | category$parentcategoryArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      parentcategory: Prisma.$categoryPayload<ExtArgs> | null
      childcategory: Prisma.$categoryPayload<ExtArgs>[]
      productcategory: Prisma.$productcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      categorystatus: number
      image: string | null
      slug: string | null
      parentcategoryid: number | null
      isshow: boolean
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentcategory<T extends category$parentcategoryArgs<ExtArgs> = {}>(args?: Subset<T, category$parentcategoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childcategory<T extends category$childcategoryArgs<ExtArgs> = {}>(args?: Subset<T, category$childcategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productcategory<T extends category$productcategoryArgs<ExtArgs> = {}>(args?: Subset<T, category$productcategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly description: FieldRef<"category", 'String'>
    readonly categorystatus: FieldRef<"category", 'Int'>
    readonly image: FieldRef<"category", 'String'>
    readonly slug: FieldRef<"category", 'String'>
    readonly parentcategoryid: FieldRef<"category", 'Int'>
    readonly isshow: FieldRef<"category", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.parentcategory
   */
  export type category$parentcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * category.childcategory
   */
  export type category$childcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    cursor?: categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category.productcategory
   */
  export type category$productcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    where?: productcategoryWhereInput
    orderBy?: productcategoryOrderByWithRelationInput | productcategoryOrderByWithRelationInput[]
    cursor?: productcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductcategoryScalarFieldEnum | ProductcategoryScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    discountprice: number | null
    status: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    discountprice: number | null
    status: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    sku: string | null
    price: number | null
    discountprice: number | null
    status: number | null
    isfeatured: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    sku: string | null
    price: number | null
    discountprice: number | null
    status: number | null
    isfeatured: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    sku: number
    price: number
    discountprice: number
    status: number
    isfeatured: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    discountprice?: true
    status?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    discountprice?: true
    status?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sku?: true
    price?: true
    discountprice?: true
    status?: true
    isfeatured?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sku?: true
    price?: true
    discountprice?: true
    status?: true
    isfeatured?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sku?: true
    price?: true
    discountprice?: true
    status?: true
    isfeatured?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice: number | null
    status: number
    isfeatured: boolean
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    discountprice?: boolean
    status?: boolean
    isfeatured?: boolean
    productcategory?: boolean | product$productcategoryArgs<ExtArgs>
    productimage?: boolean | product$productimageArgs<ExtArgs>
    productvariant?: boolean | product$productvariantArgs<ExtArgs>
    orderItem?: boolean | product$orderItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    discountprice?: boolean
    status?: boolean
    isfeatured?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    discountprice?: boolean
    status?: boolean
    isfeatured?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    discountprice?: boolean
    status?: boolean
    isfeatured?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "sku" | "price" | "discountprice" | "status" | "isfeatured", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productcategory?: boolean | product$productcategoryArgs<ExtArgs>
    productimage?: boolean | product$productimageArgs<ExtArgs>
    productvariant?: boolean | product$productvariantArgs<ExtArgs>
    orderItem?: boolean | product$orderItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      productcategory: Prisma.$productcategoryPayload<ExtArgs>[]
      productimage: Prisma.$productimagePayload<ExtArgs>[]
      productvariant: Prisma.$productvariantPayload<ExtArgs>[]
      orderItem: Prisma.$orderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string
      sku: string
      price: number
      discountprice: number | null
      status: number
      isfeatured: boolean
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productcategory<T extends product$productcategoryArgs<ExtArgs> = {}>(args?: Subset<T, product$productcategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productimage<T extends product$productimageArgs<ExtArgs> = {}>(args?: Subset<T, product$productimageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productvariant<T extends product$productvariantArgs<ExtArgs> = {}>(args?: Subset<T, product$productvariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItem<T extends product$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, product$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly slug: FieldRef<"product", 'String'>
    readonly description: FieldRef<"product", 'String'>
    readonly sku: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Int'>
    readonly discountprice: FieldRef<"product", 'Int'>
    readonly status: FieldRef<"product", 'Int'>
    readonly isfeatured: FieldRef<"product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.productcategory
   */
  export type product$productcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    where?: productcategoryWhereInput
    orderBy?: productcategoryOrderByWithRelationInput | productcategoryOrderByWithRelationInput[]
    cursor?: productcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductcategoryScalarFieldEnum | ProductcategoryScalarFieldEnum[]
  }

  /**
   * product.productimage
   */
  export type product$productimageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    where?: productimageWhereInput
    orderBy?: productimageOrderByWithRelationInput | productimageOrderByWithRelationInput[]
    cursor?: productimageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductimageScalarFieldEnum | ProductimageScalarFieldEnum[]
  }

  /**
   * product.productvariant
   */
  export type product$productvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    where?: productvariantWhereInput
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    cursor?: productvariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductvariantScalarFieldEnum | ProductvariantScalarFieldEnum[]
  }

  /**
   * product.orderItem
   */
  export type product$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model productcategory
   */

  export type AggregateProductcategory = {
    _count: ProductcategoryCountAggregateOutputType | null
    _avg: ProductcategoryAvgAggregateOutputType | null
    _sum: ProductcategorySumAggregateOutputType | null
    _min: ProductcategoryMinAggregateOutputType | null
    _max: ProductcategoryMaxAggregateOutputType | null
  }

  export type ProductcategoryAvgAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type ProductcategorySumAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type ProductcategoryMinAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type ProductcategoryMaxAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type ProductcategoryCountAggregateOutputType = {
    productid: number
    categoryid: number
    _all: number
  }


  export type ProductcategoryAvgAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type ProductcategorySumAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type ProductcategoryMinAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type ProductcategoryMaxAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type ProductcategoryCountAggregateInputType = {
    productid?: true
    categoryid?: true
    _all?: true
  }

  export type ProductcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productcategory to aggregate.
     */
    where?: productcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoryOrderByWithRelationInput | productcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productcategories
    **/
    _count?: true | ProductcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductcategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductcategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductcategoryMaxAggregateInputType
  }

  export type GetProductcategoryAggregateType<T extends ProductcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductcategory[P]>
      : GetScalarType<T[P], AggregateProductcategory[P]>
  }




  export type productcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productcategoryWhereInput
    orderBy?: productcategoryOrderByWithAggregationInput | productcategoryOrderByWithAggregationInput[]
    by: ProductcategoryScalarFieldEnum[] | ProductcategoryScalarFieldEnum
    having?: productcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductcategoryCountAggregateInputType | true
    _avg?: ProductcategoryAvgAggregateInputType
    _sum?: ProductcategorySumAggregateInputType
    _min?: ProductcategoryMinAggregateInputType
    _max?: ProductcategoryMaxAggregateInputType
  }

  export type ProductcategoryGroupByOutputType = {
    productid: number
    categoryid: number
    _count: ProductcategoryCountAggregateOutputType | null
    _avg: ProductcategoryAvgAggregateOutputType | null
    _sum: ProductcategorySumAggregateOutputType | null
    _min: ProductcategoryMinAggregateOutputType | null
    _max: ProductcategoryMaxAggregateOutputType | null
  }

  type GetProductcategoryGroupByPayload<T extends productcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductcategoryGroupByOutputType[P]>
        }
      >
    >


  export type productcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    categoryid?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productcategory"]>

  export type productcategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    categoryid?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productcategory"]>

  export type productcategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    categoryid?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productcategory"]>

  export type productcategorySelectScalar = {
    productid?: boolean
    categoryid?: boolean
  }

  export type productcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productid" | "categoryid", ExtArgs["result"]["productcategory"]>
  export type productcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type productcategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type productcategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $productcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productcategory"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productid: number
      categoryid: number
    }, ExtArgs["result"]["productcategory"]>
    composites: {}
  }

  type productcategoryGetPayload<S extends boolean | null | undefined | productcategoryDefaultArgs> = $Result.GetResult<Prisma.$productcategoryPayload, S>

  type productcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductcategoryCountAggregateInputType | true
    }

  export interface productcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productcategory'], meta: { name: 'productcategory' } }
    /**
     * Find zero or one Productcategory that matches the filter.
     * @param {productcategoryFindUniqueArgs} args - Arguments to find a Productcategory
     * @example
     * // Get one Productcategory
     * const productcategory = await prisma.productcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productcategoryFindUniqueArgs>(args: SelectSubset<T, productcategoryFindUniqueArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productcategoryFindUniqueOrThrowArgs} args - Arguments to find a Productcategory
     * @example
     * // Get one Productcategory
     * const productcategory = await prisma.productcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, productcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoryFindFirstArgs} args - Arguments to find a Productcategory
     * @example
     * // Get one Productcategory
     * const productcategory = await prisma.productcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productcategoryFindFirstArgs>(args?: SelectSubset<T, productcategoryFindFirstArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoryFindFirstOrThrowArgs} args - Arguments to find a Productcategory
     * @example
     * // Get one Productcategory
     * const productcategory = await prisma.productcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, productcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productcategories
     * const productcategories = await prisma.productcategory.findMany()
     * 
     * // Get first 10 Productcategories
     * const productcategories = await prisma.productcategory.findMany({ take: 10 })
     * 
     * // Only select the `productid`
     * const productcategoryWithProductidOnly = await prisma.productcategory.findMany({ select: { productid: true } })
     * 
     */
    findMany<T extends productcategoryFindManyArgs>(args?: SelectSubset<T, productcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productcategory.
     * @param {productcategoryCreateArgs} args - Arguments to create a Productcategory.
     * @example
     * // Create one Productcategory
     * const Productcategory = await prisma.productcategory.create({
     *   data: {
     *     // ... data to create a Productcategory
     *   }
     * })
     * 
     */
    create<T extends productcategoryCreateArgs>(args: SelectSubset<T, productcategoryCreateArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productcategories.
     * @param {productcategoryCreateManyArgs} args - Arguments to create many Productcategories.
     * @example
     * // Create many Productcategories
     * const productcategory = await prisma.productcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productcategoryCreateManyArgs>(args?: SelectSubset<T, productcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productcategories and returns the data saved in the database.
     * @param {productcategoryCreateManyAndReturnArgs} args - Arguments to create many Productcategories.
     * @example
     * // Create many Productcategories
     * const productcategory = await prisma.productcategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productcategories and only return the `productid`
     * const productcategoryWithProductidOnly = await prisma.productcategory.createManyAndReturn({
     *   select: { productid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productcategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, productcategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productcategory.
     * @param {productcategoryDeleteArgs} args - Arguments to delete one Productcategory.
     * @example
     * // Delete one Productcategory
     * const Productcategory = await prisma.productcategory.delete({
     *   where: {
     *     // ... filter to delete one Productcategory
     *   }
     * })
     * 
     */
    delete<T extends productcategoryDeleteArgs>(args: SelectSubset<T, productcategoryDeleteArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productcategory.
     * @param {productcategoryUpdateArgs} args - Arguments to update one Productcategory.
     * @example
     * // Update one Productcategory
     * const productcategory = await prisma.productcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productcategoryUpdateArgs>(args: SelectSubset<T, productcategoryUpdateArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productcategories.
     * @param {productcategoryDeleteManyArgs} args - Arguments to filter Productcategories to delete.
     * @example
     * // Delete a few Productcategories
     * const { count } = await prisma.productcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productcategoryDeleteManyArgs>(args?: SelectSubset<T, productcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productcategories
     * const productcategory = await prisma.productcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productcategoryUpdateManyArgs>(args: SelectSubset<T, productcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productcategories and returns the data updated in the database.
     * @param {productcategoryUpdateManyAndReturnArgs} args - Arguments to update many Productcategories.
     * @example
     * // Update many Productcategories
     * const productcategory = await prisma.productcategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productcategories and only return the `productid`
     * const productcategoryWithProductidOnly = await prisma.productcategory.updateManyAndReturn({
     *   select: { productid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productcategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, productcategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productcategory.
     * @param {productcategoryUpsertArgs} args - Arguments to update or create a Productcategory.
     * @example
     * // Update or create a Productcategory
     * const productcategory = await prisma.productcategory.upsert({
     *   create: {
     *     // ... data to create a Productcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productcategory we want to update
     *   }
     * })
     */
    upsert<T extends productcategoryUpsertArgs>(args: SelectSubset<T, productcategoryUpsertArgs<ExtArgs>>): Prisma__productcategoryClient<$Result.GetResult<Prisma.$productcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoryCountArgs} args - Arguments to filter Productcategories to count.
     * @example
     * // Count the number of Productcategories
     * const count = await prisma.productcategory.count({
     *   where: {
     *     // ... the filter for the Productcategories we want to count
     *   }
     * })
    **/
    count<T extends productcategoryCountArgs>(
      args?: Subset<T, productcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductcategoryAggregateArgs>(args: Subset<T, ProductcategoryAggregateArgs>): Prisma.PrismaPromise<GetProductcategoryAggregateType<T>>

    /**
     * Group by Productcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productcategoryGroupByArgs['orderBy'] }
        : { orderBy?: productcategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productcategory model
   */
  readonly fields: productcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productcategory model
   */
  interface productcategoryFieldRefs {
    readonly productid: FieldRef<"productcategory", 'Int'>
    readonly categoryid: FieldRef<"productcategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * productcategory findUnique
   */
  export type productcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * Filter, which productcategory to fetch.
     */
    where: productcategoryWhereUniqueInput
  }

  /**
   * productcategory findUniqueOrThrow
   */
  export type productcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * Filter, which productcategory to fetch.
     */
    where: productcategoryWhereUniqueInput
  }

  /**
   * productcategory findFirst
   */
  export type productcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * Filter, which productcategory to fetch.
     */
    where?: productcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoryOrderByWithRelationInput | productcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productcategories.
     */
    cursor?: productcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productcategories.
     */
    distinct?: ProductcategoryScalarFieldEnum | ProductcategoryScalarFieldEnum[]
  }

  /**
   * productcategory findFirstOrThrow
   */
  export type productcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * Filter, which productcategory to fetch.
     */
    where?: productcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoryOrderByWithRelationInput | productcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productcategories.
     */
    cursor?: productcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productcategories.
     */
    distinct?: ProductcategoryScalarFieldEnum | ProductcategoryScalarFieldEnum[]
  }

  /**
   * productcategory findMany
   */
  export type productcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * Filter, which productcategories to fetch.
     */
    where?: productcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoryOrderByWithRelationInput | productcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productcategories.
     */
    cursor?: productcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    distinct?: ProductcategoryScalarFieldEnum | ProductcategoryScalarFieldEnum[]
  }

  /**
   * productcategory create
   */
  export type productcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a productcategory.
     */
    data: XOR<productcategoryCreateInput, productcategoryUncheckedCreateInput>
  }

  /**
   * productcategory createMany
   */
  export type productcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productcategories.
     */
    data: productcategoryCreateManyInput | productcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productcategory createManyAndReturn
   */
  export type productcategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * The data used to create many productcategories.
     */
    data: productcategoryCreateManyInput | productcategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productcategory update
   */
  export type productcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a productcategory.
     */
    data: XOR<productcategoryUpdateInput, productcategoryUncheckedUpdateInput>
    /**
     * Choose, which productcategory to update.
     */
    where: productcategoryWhereUniqueInput
  }

  /**
   * productcategory updateMany
   */
  export type productcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productcategories.
     */
    data: XOR<productcategoryUpdateManyMutationInput, productcategoryUncheckedUpdateManyInput>
    /**
     * Filter which productcategories to update
     */
    where?: productcategoryWhereInput
    /**
     * Limit how many productcategories to update.
     */
    limit?: number
  }

  /**
   * productcategory updateManyAndReturn
   */
  export type productcategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * The data used to update productcategories.
     */
    data: XOR<productcategoryUpdateManyMutationInput, productcategoryUncheckedUpdateManyInput>
    /**
     * Filter which productcategories to update
     */
    where?: productcategoryWhereInput
    /**
     * Limit how many productcategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productcategory upsert
   */
  export type productcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the productcategory to update in case it exists.
     */
    where: productcategoryWhereUniqueInput
    /**
     * In case the productcategory found by the `where` argument doesn't exist, create a new productcategory with this data.
     */
    create: XOR<productcategoryCreateInput, productcategoryUncheckedCreateInput>
    /**
     * In case the productcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productcategoryUpdateInput, productcategoryUncheckedUpdateInput>
  }

  /**
   * productcategory delete
   */
  export type productcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
    /**
     * Filter which productcategory to delete.
     */
    where: productcategoryWhereUniqueInput
  }

  /**
   * productcategory deleteMany
   */
  export type productcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productcategories to delete
     */
    where?: productcategoryWhereInput
    /**
     * Limit how many productcategories to delete.
     */
    limit?: number
  }

  /**
   * productcategory without action
   */
  export type productcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategory
     */
    select?: productcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategory
     */
    omit?: productcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoryInclude<ExtArgs> | null
  }


  /**
   * Model productimage
   */

  export type AggregateProductimage = {
    _count: ProductimageCountAggregateOutputType | null
    _avg: ProductimageAvgAggregateOutputType | null
    _sum: ProductimageSumAggregateOutputType | null
    _min: ProductimageMinAggregateOutputType | null
    _max: ProductimageMaxAggregateOutputType | null
  }

  export type ProductimageAvgAggregateOutputType = {
    id: number | null
    displayorder: number | null
    productid: number | null
  }

  export type ProductimageSumAggregateOutputType = {
    id: number | null
    displayorder: number | null
    productid: number | null
  }

  export type ProductimageMinAggregateOutputType = {
    id: number | null
    imageurl: string | null
    displayorder: number | null
    productid: number | null
  }

  export type ProductimageMaxAggregateOutputType = {
    id: number | null
    imageurl: string | null
    displayorder: number | null
    productid: number | null
  }

  export type ProductimageCountAggregateOutputType = {
    id: number
    imageurl: number
    displayorder: number
    productid: number
    _all: number
  }


  export type ProductimageAvgAggregateInputType = {
    id?: true
    displayorder?: true
    productid?: true
  }

  export type ProductimageSumAggregateInputType = {
    id?: true
    displayorder?: true
    productid?: true
  }

  export type ProductimageMinAggregateInputType = {
    id?: true
    imageurl?: true
    displayorder?: true
    productid?: true
  }

  export type ProductimageMaxAggregateInputType = {
    id?: true
    imageurl?: true
    displayorder?: true
    productid?: true
  }

  export type ProductimageCountAggregateInputType = {
    id?: true
    imageurl?: true
    displayorder?: true
    productid?: true
    _all?: true
  }

  export type ProductimageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productimage to aggregate.
     */
    where?: productimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productimages to fetch.
     */
    orderBy?: productimageOrderByWithRelationInput | productimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productimages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productimages
    **/
    _count?: true | ProductimageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductimageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductimageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductimageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductimageMaxAggregateInputType
  }

  export type GetProductimageAggregateType<T extends ProductimageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductimage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductimage[P]>
      : GetScalarType<T[P], AggregateProductimage[P]>
  }




  export type productimageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productimageWhereInput
    orderBy?: productimageOrderByWithAggregationInput | productimageOrderByWithAggregationInput[]
    by: ProductimageScalarFieldEnum[] | ProductimageScalarFieldEnum
    having?: productimageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductimageCountAggregateInputType | true
    _avg?: ProductimageAvgAggregateInputType
    _sum?: ProductimageSumAggregateInputType
    _min?: ProductimageMinAggregateInputType
    _max?: ProductimageMaxAggregateInputType
  }

  export type ProductimageGroupByOutputType = {
    id: number
    imageurl: string
    displayorder: number | null
    productid: number | null
    _count: ProductimageCountAggregateOutputType | null
    _avg: ProductimageAvgAggregateOutputType | null
    _sum: ProductimageSumAggregateOutputType | null
    _min: ProductimageMinAggregateOutputType | null
    _max: ProductimageMaxAggregateOutputType | null
  }

  type GetProductimageGroupByPayload<T extends productimageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductimageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductimageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductimageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductimageGroupByOutputType[P]>
        }
      >
    >


  export type productimageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageurl?: boolean
    displayorder?: boolean
    productid?: boolean
    product?: boolean | productimage$productArgs<ExtArgs>
    productvariant?: boolean | productimage$productvariantArgs<ExtArgs>
    _count?: boolean | ProductimageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productimage"]>

  export type productimageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageurl?: boolean
    displayorder?: boolean
    productid?: boolean
    product?: boolean | productimage$productArgs<ExtArgs>
  }, ExtArgs["result"]["productimage"]>

  export type productimageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageurl?: boolean
    displayorder?: boolean
    productid?: boolean
    product?: boolean | productimage$productArgs<ExtArgs>
  }, ExtArgs["result"]["productimage"]>

  export type productimageSelectScalar = {
    id?: boolean
    imageurl?: boolean
    displayorder?: boolean
    productid?: boolean
  }

  export type productimageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageurl" | "displayorder" | "productid", ExtArgs["result"]["productimage"]>
  export type productimageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productimage$productArgs<ExtArgs>
    productvariant?: boolean | productimage$productvariantArgs<ExtArgs>
    _count?: boolean | ProductimageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productimageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productimage$productArgs<ExtArgs>
  }
  export type productimageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productimage$productArgs<ExtArgs>
  }

  export type $productimagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productimage"
    objects: {
      product: Prisma.$productPayload<ExtArgs> | null
      productvariant: Prisma.$productvariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageurl: string
      displayorder: number | null
      productid: number | null
    }, ExtArgs["result"]["productimage"]>
    composites: {}
  }

  type productimageGetPayload<S extends boolean | null | undefined | productimageDefaultArgs> = $Result.GetResult<Prisma.$productimagePayload, S>

  type productimageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productimageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductimageCountAggregateInputType | true
    }

  export interface productimageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productimage'], meta: { name: 'productimage' } }
    /**
     * Find zero or one Productimage that matches the filter.
     * @param {productimageFindUniqueArgs} args - Arguments to find a Productimage
     * @example
     * // Get one Productimage
     * const productimage = await prisma.productimage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productimageFindUniqueArgs>(args: SelectSubset<T, productimageFindUniqueArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productimage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productimageFindUniqueOrThrowArgs} args - Arguments to find a Productimage
     * @example
     * // Get one Productimage
     * const productimage = await prisma.productimage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productimageFindUniqueOrThrowArgs>(args: SelectSubset<T, productimageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productimage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productimageFindFirstArgs} args - Arguments to find a Productimage
     * @example
     * // Get one Productimage
     * const productimage = await prisma.productimage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productimageFindFirstArgs>(args?: SelectSubset<T, productimageFindFirstArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productimage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productimageFindFirstOrThrowArgs} args - Arguments to find a Productimage
     * @example
     * // Get one Productimage
     * const productimage = await prisma.productimage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productimageFindFirstOrThrowArgs>(args?: SelectSubset<T, productimageFindFirstOrThrowArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productimages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productimageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productimages
     * const productimages = await prisma.productimage.findMany()
     * 
     * // Get first 10 Productimages
     * const productimages = await prisma.productimage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productimageWithIdOnly = await prisma.productimage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productimageFindManyArgs>(args?: SelectSubset<T, productimageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productimage.
     * @param {productimageCreateArgs} args - Arguments to create a Productimage.
     * @example
     * // Create one Productimage
     * const Productimage = await prisma.productimage.create({
     *   data: {
     *     // ... data to create a Productimage
     *   }
     * })
     * 
     */
    create<T extends productimageCreateArgs>(args: SelectSubset<T, productimageCreateArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productimages.
     * @param {productimageCreateManyArgs} args - Arguments to create many Productimages.
     * @example
     * // Create many Productimages
     * const productimage = await prisma.productimage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productimageCreateManyArgs>(args?: SelectSubset<T, productimageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productimages and returns the data saved in the database.
     * @param {productimageCreateManyAndReturnArgs} args - Arguments to create many Productimages.
     * @example
     * // Create many Productimages
     * const productimage = await prisma.productimage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productimages and only return the `id`
     * const productimageWithIdOnly = await prisma.productimage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productimageCreateManyAndReturnArgs>(args?: SelectSubset<T, productimageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productimage.
     * @param {productimageDeleteArgs} args - Arguments to delete one Productimage.
     * @example
     * // Delete one Productimage
     * const Productimage = await prisma.productimage.delete({
     *   where: {
     *     // ... filter to delete one Productimage
     *   }
     * })
     * 
     */
    delete<T extends productimageDeleteArgs>(args: SelectSubset<T, productimageDeleteArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productimage.
     * @param {productimageUpdateArgs} args - Arguments to update one Productimage.
     * @example
     * // Update one Productimage
     * const productimage = await prisma.productimage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productimageUpdateArgs>(args: SelectSubset<T, productimageUpdateArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productimages.
     * @param {productimageDeleteManyArgs} args - Arguments to filter Productimages to delete.
     * @example
     * // Delete a few Productimages
     * const { count } = await prisma.productimage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productimageDeleteManyArgs>(args?: SelectSubset<T, productimageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productimages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productimageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productimages
     * const productimage = await prisma.productimage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productimageUpdateManyArgs>(args: SelectSubset<T, productimageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productimages and returns the data updated in the database.
     * @param {productimageUpdateManyAndReturnArgs} args - Arguments to update many Productimages.
     * @example
     * // Update many Productimages
     * const productimage = await prisma.productimage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productimages and only return the `id`
     * const productimageWithIdOnly = await prisma.productimage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productimageUpdateManyAndReturnArgs>(args: SelectSubset<T, productimageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productimage.
     * @param {productimageUpsertArgs} args - Arguments to update or create a Productimage.
     * @example
     * // Update or create a Productimage
     * const productimage = await prisma.productimage.upsert({
     *   create: {
     *     // ... data to create a Productimage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productimage we want to update
     *   }
     * })
     */
    upsert<T extends productimageUpsertArgs>(args: SelectSubset<T, productimageUpsertArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productimages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productimageCountArgs} args - Arguments to filter Productimages to count.
     * @example
     * // Count the number of Productimages
     * const count = await prisma.productimage.count({
     *   where: {
     *     // ... the filter for the Productimages we want to count
     *   }
     * })
    **/
    count<T extends productimageCountArgs>(
      args?: Subset<T, productimageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductimageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productimage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductimageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductimageAggregateArgs>(args: Subset<T, ProductimageAggregateArgs>): Prisma.PrismaPromise<GetProductimageAggregateType<T>>

    /**
     * Group by Productimage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productimageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productimageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productimageGroupByArgs['orderBy'] }
        : { orderBy?: productimageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productimageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductimageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productimage model
   */
  readonly fields: productimageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productimage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productimageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productimage$productArgs<ExtArgs> = {}>(args?: Subset<T, productimage$productArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productvariant<T extends productimage$productvariantArgs<ExtArgs> = {}>(args?: Subset<T, productimage$productvariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productimage model
   */
  interface productimageFieldRefs {
    readonly id: FieldRef<"productimage", 'Int'>
    readonly imageurl: FieldRef<"productimage", 'String'>
    readonly displayorder: FieldRef<"productimage", 'Int'>
    readonly productid: FieldRef<"productimage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * productimage findUnique
   */
  export type productimageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * Filter, which productimage to fetch.
     */
    where: productimageWhereUniqueInput
  }

  /**
   * productimage findUniqueOrThrow
   */
  export type productimageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * Filter, which productimage to fetch.
     */
    where: productimageWhereUniqueInput
  }

  /**
   * productimage findFirst
   */
  export type productimageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * Filter, which productimage to fetch.
     */
    where?: productimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productimages to fetch.
     */
    orderBy?: productimageOrderByWithRelationInput | productimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productimages.
     */
    cursor?: productimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productimages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productimages.
     */
    distinct?: ProductimageScalarFieldEnum | ProductimageScalarFieldEnum[]
  }

  /**
   * productimage findFirstOrThrow
   */
  export type productimageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * Filter, which productimage to fetch.
     */
    where?: productimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productimages to fetch.
     */
    orderBy?: productimageOrderByWithRelationInput | productimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productimages.
     */
    cursor?: productimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productimages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productimages.
     */
    distinct?: ProductimageScalarFieldEnum | ProductimageScalarFieldEnum[]
  }

  /**
   * productimage findMany
   */
  export type productimageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * Filter, which productimages to fetch.
     */
    where?: productimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productimages to fetch.
     */
    orderBy?: productimageOrderByWithRelationInput | productimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productimages.
     */
    cursor?: productimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productimages.
     */
    skip?: number
    distinct?: ProductimageScalarFieldEnum | ProductimageScalarFieldEnum[]
  }

  /**
   * productimage create
   */
  export type productimageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * The data needed to create a productimage.
     */
    data: XOR<productimageCreateInput, productimageUncheckedCreateInput>
  }

  /**
   * productimage createMany
   */
  export type productimageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productimages.
     */
    data: productimageCreateManyInput | productimageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productimage createManyAndReturn
   */
  export type productimageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * The data used to create many productimages.
     */
    data: productimageCreateManyInput | productimageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productimage update
   */
  export type productimageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * The data needed to update a productimage.
     */
    data: XOR<productimageUpdateInput, productimageUncheckedUpdateInput>
    /**
     * Choose, which productimage to update.
     */
    where: productimageWhereUniqueInput
  }

  /**
   * productimage updateMany
   */
  export type productimageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productimages.
     */
    data: XOR<productimageUpdateManyMutationInput, productimageUncheckedUpdateManyInput>
    /**
     * Filter which productimages to update
     */
    where?: productimageWhereInput
    /**
     * Limit how many productimages to update.
     */
    limit?: number
  }

  /**
   * productimage updateManyAndReturn
   */
  export type productimageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * The data used to update productimages.
     */
    data: XOR<productimageUpdateManyMutationInput, productimageUncheckedUpdateManyInput>
    /**
     * Filter which productimages to update
     */
    where?: productimageWhereInput
    /**
     * Limit how many productimages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productimage upsert
   */
  export type productimageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * The filter to search for the productimage to update in case it exists.
     */
    where: productimageWhereUniqueInput
    /**
     * In case the productimage found by the `where` argument doesn't exist, create a new productimage with this data.
     */
    create: XOR<productimageCreateInput, productimageUncheckedCreateInput>
    /**
     * In case the productimage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productimageUpdateInput, productimageUncheckedUpdateInput>
  }

  /**
   * productimage delete
   */
  export type productimageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    /**
     * Filter which productimage to delete.
     */
    where: productimageWhereUniqueInput
  }

  /**
   * productimage deleteMany
   */
  export type productimageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productimages to delete
     */
    where?: productimageWhereInput
    /**
     * Limit how many productimages to delete.
     */
    limit?: number
  }

  /**
   * productimage.product
   */
  export type productimage$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
  }

  /**
   * productimage.productvariant
   */
  export type productimage$productvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    where?: productvariantWhereInput
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    cursor?: productvariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductvariantScalarFieldEnum | ProductvariantScalarFieldEnum[]
  }

  /**
   * productimage without action
   */
  export type productimageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
  }


  /**
   * Model size
   */

  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  export type SizeAvgAggregateOutputType = {
    index: number | null
  }

  export type SizeSumAggregateOutputType = {
    index: number | null
  }

  export type SizeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    index: number | null
  }

  export type SizeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    index: number | null
  }

  export type SizeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    index: number
    _all: number
  }


  export type SizeAvgAggregateInputType = {
    index?: true
  }

  export type SizeSumAggregateInputType = {
    index?: true
  }

  export type SizeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    index?: true
  }

  export type SizeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    index?: true
  }

  export type SizeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    index?: true
    _all?: true
  }

  export type SizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which size to aggregate.
     */
    where?: sizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizeOrderByWithRelationInput | sizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }




  export type sizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sizeWhereInput
    orderBy?: sizeOrderByWithAggregationInput | sizeOrderByWithAggregationInput[]
    by: SizeScalarFieldEnum[] | SizeScalarFieldEnum
    having?: sizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _avg?: SizeAvgAggregateInputType
    _sum?: SizeSumAggregateInputType
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }

  export type SizeGroupByOutputType = {
    id: string
    name: string | null
    description: string
    index: number
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends sizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizeGroupByOutputType[P]>
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      >
    >


  export type sizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    index?: boolean
    productvariant?: boolean | size$productvariantArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type sizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    index?: boolean
  }, ExtArgs["result"]["size"]>

  export type sizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    index?: boolean
  }, ExtArgs["result"]["size"]>

  export type sizeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    index?: boolean
  }

  export type sizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "index", ExtArgs["result"]["size"]>
  export type sizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productvariant?: boolean | size$productvariantArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type sizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $sizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "size"
    objects: {
      productvariant: Prisma.$productvariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string
      index: number
    }, ExtArgs["result"]["size"]>
    composites: {}
  }

  type sizeGetPayload<S extends boolean | null | undefined | sizeDefaultArgs> = $Result.GetResult<Prisma.$sizePayload, S>

  type sizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SizeCountAggregateInputType | true
    }

  export interface sizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['size'], meta: { name: 'size' } }
    /**
     * Find zero or one Size that matches the filter.
     * @param {sizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sizeFindUniqueArgs>(args: SelectSubset<T, sizeFindUniqueArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Size that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sizeFindUniqueOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sizeFindUniqueOrThrowArgs>(args: SelectSubset<T, sizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sizeFindFirstArgs>(args?: SelectSubset<T, sizeFindFirstArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizeFindFirstOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sizeFindFirstOrThrowArgs>(args?: SelectSubset<T, sizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizeWithIdOnly = await prisma.size.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sizeFindManyArgs>(args?: SelectSubset<T, sizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Size.
     * @param {sizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
     */
    create<T extends sizeCreateArgs>(args: SelectSubset<T, sizeCreateArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sizes.
     * @param {sizeCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sizeCreateManyArgs>(args?: SelectSubset<T, sizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sizes and returns the data saved in the database.
     * @param {sizeCreateManyAndReturnArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sizeCreateManyAndReturnArgs>(args?: SelectSubset<T, sizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Size.
     * @param {sizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
     */
    delete<T extends sizeDeleteArgs>(args: SelectSubset<T, sizeDeleteArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Size.
     * @param {sizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sizeUpdateArgs>(args: SelectSubset<T, sizeUpdateArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sizes.
     * @param {sizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sizeDeleteManyArgs>(args?: SelectSubset<T, sizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sizeUpdateManyArgs>(args: SelectSubset<T, sizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes and returns the data updated in the database.
     * @param {sizeUpdateManyAndReturnArgs} args - Arguments to update many Sizes.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sizeUpdateManyAndReturnArgs>(args: SelectSubset<T, sizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Size.
     * @param {sizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
     */
    upsert<T extends sizeUpsertArgs>(args: SelectSubset<T, sizeUpsertArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends sizeCountArgs>(
      args?: Subset<T, sizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): Prisma.PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sizeGroupByArgs['orderBy'] }
        : { orderBy?: sizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the size model
   */
  readonly fields: sizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productvariant<T extends size$productvariantArgs<ExtArgs> = {}>(args?: Subset<T, size$productvariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the size model
   */
  interface sizeFieldRefs {
    readonly id: FieldRef<"size", 'String'>
    readonly name: FieldRef<"size", 'String'>
    readonly description: FieldRef<"size", 'String'>
    readonly index: FieldRef<"size", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * size findUnique
   */
  export type sizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * Filter, which size to fetch.
     */
    where: sizeWhereUniqueInput
  }

  /**
   * size findUniqueOrThrow
   */
  export type sizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * Filter, which size to fetch.
     */
    where: sizeWhereUniqueInput
  }

  /**
   * size findFirst
   */
  export type sizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * Filter, which size to fetch.
     */
    where?: sizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizeOrderByWithRelationInput | sizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sizes.
     */
    cursor?: sizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * size findFirstOrThrow
   */
  export type sizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * Filter, which size to fetch.
     */
    where?: sizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizeOrderByWithRelationInput | sizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sizes.
     */
    cursor?: sizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * size findMany
   */
  export type sizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * Filter, which sizes to fetch.
     */
    where?: sizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizeOrderByWithRelationInput | sizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sizes.
     */
    cursor?: sizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * size create
   */
  export type sizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * The data needed to create a size.
     */
    data: XOR<sizeCreateInput, sizeUncheckedCreateInput>
  }

  /**
   * size createMany
   */
  export type sizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sizes.
     */
    data: sizeCreateManyInput | sizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * size createManyAndReturn
   */
  export type sizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * The data used to create many sizes.
     */
    data: sizeCreateManyInput | sizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * size update
   */
  export type sizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * The data needed to update a size.
     */
    data: XOR<sizeUpdateInput, sizeUncheckedUpdateInput>
    /**
     * Choose, which size to update.
     */
    where: sizeWhereUniqueInput
  }

  /**
   * size updateMany
   */
  export type sizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sizes.
     */
    data: XOR<sizeUpdateManyMutationInput, sizeUncheckedUpdateManyInput>
    /**
     * Filter which sizes to update
     */
    where?: sizeWhereInput
    /**
     * Limit how many sizes to update.
     */
    limit?: number
  }

  /**
   * size updateManyAndReturn
   */
  export type sizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * The data used to update sizes.
     */
    data: XOR<sizeUpdateManyMutationInput, sizeUncheckedUpdateManyInput>
    /**
     * Filter which sizes to update
     */
    where?: sizeWhereInput
    /**
     * Limit how many sizes to update.
     */
    limit?: number
  }

  /**
   * size upsert
   */
  export type sizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * The filter to search for the size to update in case it exists.
     */
    where: sizeWhereUniqueInput
    /**
     * In case the size found by the `where` argument doesn't exist, create a new size with this data.
     */
    create: XOR<sizeCreateInput, sizeUncheckedCreateInput>
    /**
     * In case the size was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sizeUpdateInput, sizeUncheckedUpdateInput>
  }

  /**
   * size delete
   */
  export type sizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
    /**
     * Filter which size to delete.
     */
    where: sizeWhereUniqueInput
  }

  /**
   * size deleteMany
   */
  export type sizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sizes to delete
     */
    where?: sizeWhereInput
    /**
     * Limit how many sizes to delete.
     */
    limit?: number
  }

  /**
   * size.productvariant
   */
  export type size$productvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    where?: productvariantWhereInput
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    cursor?: productvariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductvariantScalarFieldEnum | ProductvariantScalarFieldEnum[]
  }

  /**
   * size without action
   */
  export type sizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the size
     */
    select?: sizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the size
     */
    omit?: sizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sizeInclude<ExtArgs> | null
  }


  /**
   * Model color
   */

  export type AggregateColor = {
    _count: ColorCountAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  export type ColorMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
  }

  export type ColorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
  }

  export type ColorCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type ColorMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type ColorMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type ColorCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    _all?: true
  }

  export type ColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which color to aggregate.
     */
    where?: colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorOrderByWithRelationInput | colorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned colors
    **/
    _count?: true | ColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorMaxAggregateInputType
  }

  export type GetColorAggregateType<T extends ColorAggregateArgs> = {
        [P in keyof T & keyof AggregateColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor[P]>
      : GetScalarType<T[P], AggregateColor[P]>
  }




  export type colorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: colorWhereInput
    orderBy?: colorOrderByWithAggregationInput | colorOrderByWithAggregationInput[]
    by: ColorScalarFieldEnum[] | ColorScalarFieldEnum
    having?: colorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorCountAggregateInputType | true
    _min?: ColorMinAggregateInputType
    _max?: ColorMaxAggregateInputType
  }

  export type ColorGroupByOutputType = {
    id: string
    name: string
    code: string
    _count: ColorCountAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  type GetColorGroupByPayload<T extends colorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorGroupByOutputType[P]>
            : GetScalarType<T[P], ColorGroupByOutputType[P]>
        }
      >
    >


  export type colorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    productvariant?: boolean | color$productvariantArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type colorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["color"]>

  export type colorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["color"]>

  export type colorSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
  }

  export type colorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code", ExtArgs["result"]["color"]>
  export type colorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productvariant?: boolean | color$productvariantArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type colorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type colorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $colorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "color"
    objects: {
      productvariant: Prisma.$productvariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
    }, ExtArgs["result"]["color"]>
    composites: {}
  }

  type colorGetPayload<S extends boolean | null | undefined | colorDefaultArgs> = $Result.GetResult<Prisma.$colorPayload, S>

  type colorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<colorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorCountAggregateInputType | true
    }

  export interface colorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['color'], meta: { name: 'color' } }
    /**
     * Find zero or one Color that matches the filter.
     * @param {colorFindUniqueArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends colorFindUniqueArgs>(args: SelectSubset<T, colorFindUniqueArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Color that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {colorFindUniqueOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends colorFindUniqueOrThrowArgs>(args: SelectSubset<T, colorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorFindFirstArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends colorFindFirstArgs>(args?: SelectSubset<T, colorFindFirstArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorFindFirstOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends colorFindFirstOrThrowArgs>(args?: SelectSubset<T, colorFindFirstOrThrowArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.color.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.color.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorWithIdOnly = await prisma.color.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends colorFindManyArgs>(args?: SelectSubset<T, colorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Color.
     * @param {colorCreateArgs} args - Arguments to create a Color.
     * @example
     * // Create one Color
     * const Color = await prisma.color.create({
     *   data: {
     *     // ... data to create a Color
     *   }
     * })
     * 
     */
    create<T extends colorCreateArgs>(args: SelectSubset<T, colorCreateArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colors.
     * @param {colorCreateManyArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends colorCreateManyArgs>(args?: SelectSubset<T, colorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colors and returns the data saved in the database.
     * @param {colorCreateManyAndReturnArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends colorCreateManyAndReturnArgs>(args?: SelectSubset<T, colorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Color.
     * @param {colorDeleteArgs} args - Arguments to delete one Color.
     * @example
     * // Delete one Color
     * const Color = await prisma.color.delete({
     *   where: {
     *     // ... filter to delete one Color
     *   }
     * })
     * 
     */
    delete<T extends colorDeleteArgs>(args: SelectSubset<T, colorDeleteArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Color.
     * @param {colorUpdateArgs} args - Arguments to update one Color.
     * @example
     * // Update one Color
     * const color = await prisma.color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends colorUpdateArgs>(args: SelectSubset<T, colorUpdateArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colors.
     * @param {colorDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends colorDeleteManyArgs>(args?: SelectSubset<T, colorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends colorUpdateManyArgs>(args: SelectSubset<T, colorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors and returns the data updated in the database.
     * @param {colorUpdateManyAndReturnArgs} args - Arguments to update many Colors.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends colorUpdateManyAndReturnArgs>(args: SelectSubset<T, colorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Color.
     * @param {colorUpsertArgs} args - Arguments to update or create a Color.
     * @example
     * // Update or create a Color
     * const color = await prisma.color.upsert({
     *   create: {
     *     // ... data to create a Color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color we want to update
     *   }
     * })
     */
    upsert<T extends colorUpsertArgs>(args: SelectSubset<T, colorUpsertArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.color.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends colorCountArgs>(
      args?: Subset<T, colorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorAggregateArgs>(args: Subset<T, ColorAggregateArgs>): Prisma.PrismaPromise<GetColorAggregateType<T>>

    /**
     * Group by Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends colorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: colorGroupByArgs['orderBy'] }
        : { orderBy?: colorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, colorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the color model
   */
  readonly fields: colorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__colorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productvariant<T extends color$productvariantArgs<ExtArgs> = {}>(args?: Subset<T, color$productvariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the color model
   */
  interface colorFieldRefs {
    readonly id: FieldRef<"color", 'String'>
    readonly name: FieldRef<"color", 'String'>
    readonly code: FieldRef<"color", 'String'>
  }
    

  // Custom InputTypes
  /**
   * color findUnique
   */
  export type colorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * Filter, which color to fetch.
     */
    where: colorWhereUniqueInput
  }

  /**
   * color findUniqueOrThrow
   */
  export type colorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * Filter, which color to fetch.
     */
    where: colorWhereUniqueInput
  }

  /**
   * color findFirst
   */
  export type colorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * Filter, which color to fetch.
     */
    where?: colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorOrderByWithRelationInput | colorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colors.
     */
    cursor?: colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * color findFirstOrThrow
   */
  export type colorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * Filter, which color to fetch.
     */
    where?: colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorOrderByWithRelationInput | colorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colors.
     */
    cursor?: colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * color findMany
   */
  export type colorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where?: colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorOrderByWithRelationInput | colorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing colors.
     */
    cursor?: colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * color create
   */
  export type colorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * The data needed to create a color.
     */
    data: XOR<colorCreateInput, colorUncheckedCreateInput>
  }

  /**
   * color createMany
   */
  export type colorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many colors.
     */
    data: colorCreateManyInput | colorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * color createManyAndReturn
   */
  export type colorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * The data used to create many colors.
     */
    data: colorCreateManyInput | colorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * color update
   */
  export type colorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * The data needed to update a color.
     */
    data: XOR<colorUpdateInput, colorUncheckedUpdateInput>
    /**
     * Choose, which color to update.
     */
    where: colorWhereUniqueInput
  }

  /**
   * color updateMany
   */
  export type colorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update colors.
     */
    data: XOR<colorUpdateManyMutationInput, colorUncheckedUpdateManyInput>
    /**
     * Filter which colors to update
     */
    where?: colorWhereInput
    /**
     * Limit how many colors to update.
     */
    limit?: number
  }

  /**
   * color updateManyAndReturn
   */
  export type colorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * The data used to update colors.
     */
    data: XOR<colorUpdateManyMutationInput, colorUncheckedUpdateManyInput>
    /**
     * Filter which colors to update
     */
    where?: colorWhereInput
    /**
     * Limit how many colors to update.
     */
    limit?: number
  }

  /**
   * color upsert
   */
  export type colorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * The filter to search for the color to update in case it exists.
     */
    where: colorWhereUniqueInput
    /**
     * In case the color found by the `where` argument doesn't exist, create a new color with this data.
     */
    create: XOR<colorCreateInput, colorUncheckedCreateInput>
    /**
     * In case the color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<colorUpdateInput, colorUncheckedUpdateInput>
  }

  /**
   * color delete
   */
  export type colorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
    /**
     * Filter which color to delete.
     */
    where: colorWhereUniqueInput
  }

  /**
   * color deleteMany
   */
  export type colorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colors to delete
     */
    where?: colorWhereInput
    /**
     * Limit how many colors to delete.
     */
    limit?: number
  }

  /**
   * color.productvariant
   */
  export type color$productvariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    where?: productvariantWhereInput
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    cursor?: productvariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductvariantScalarFieldEnum | ProductvariantScalarFieldEnum[]
  }

  /**
   * color without action
   */
  export type colorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the color
     */
    select?: colorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the color
     */
    omit?: colorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorInclude<ExtArgs> | null
  }


  /**
   * Model productvariant
   */

  export type AggregateProductvariant = {
    _count: ProductvariantCountAggregateOutputType | null
    _avg: ProductvariantAvgAggregateOutputType | null
    _sum: ProductvariantSumAggregateOutputType | null
    _min: ProductvariantMinAggregateOutputType | null
    _max: ProductvariantMaxAggregateOutputType | null
  }

  export type ProductvariantAvgAggregateOutputType = {
    id: number | null
    additionalprice: number | null
    stockquantity: number | null
    productid: number | null
    imageid: number | null
  }

  export type ProductvariantSumAggregateOutputType = {
    id: number | null
    additionalprice: number | null
    stockquantity: number | null
    productid: number | null
    imageid: number | null
  }

  export type ProductvariantMinAggregateOutputType = {
    id: number | null
    additionalprice: number | null
    stockquantity: number | null
    sku: string | null
    productid: number | null
    colorid: string | null
    sizeid: string | null
    imageid: number | null
  }

  export type ProductvariantMaxAggregateOutputType = {
    id: number | null
    additionalprice: number | null
    stockquantity: number | null
    sku: string | null
    productid: number | null
    colorid: string | null
    sizeid: string | null
    imageid: number | null
  }

  export type ProductvariantCountAggregateOutputType = {
    id: number
    additionalprice: number
    stockquantity: number
    sku: number
    productid: number
    colorid: number
    sizeid: number
    imageid: number
    _all: number
  }


  export type ProductvariantAvgAggregateInputType = {
    id?: true
    additionalprice?: true
    stockquantity?: true
    productid?: true
    imageid?: true
  }

  export type ProductvariantSumAggregateInputType = {
    id?: true
    additionalprice?: true
    stockquantity?: true
    productid?: true
    imageid?: true
  }

  export type ProductvariantMinAggregateInputType = {
    id?: true
    additionalprice?: true
    stockquantity?: true
    sku?: true
    productid?: true
    colorid?: true
    sizeid?: true
    imageid?: true
  }

  export type ProductvariantMaxAggregateInputType = {
    id?: true
    additionalprice?: true
    stockquantity?: true
    sku?: true
    productid?: true
    colorid?: true
    sizeid?: true
    imageid?: true
  }

  export type ProductvariantCountAggregateInputType = {
    id?: true
    additionalprice?: true
    stockquantity?: true
    sku?: true
    productid?: true
    colorid?: true
    sizeid?: true
    imageid?: true
    _all?: true
  }

  export type ProductvariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productvariant to aggregate.
     */
    where?: productvariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productvariants to fetch.
     */
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productvariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productvariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productvariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productvariants
    **/
    _count?: true | ProductvariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductvariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductvariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductvariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductvariantMaxAggregateInputType
  }

  export type GetProductvariantAggregateType<T extends ProductvariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductvariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductvariant[P]>
      : GetScalarType<T[P], AggregateProductvariant[P]>
  }




  export type productvariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productvariantWhereInput
    orderBy?: productvariantOrderByWithAggregationInput | productvariantOrderByWithAggregationInput[]
    by: ProductvariantScalarFieldEnum[] | ProductvariantScalarFieldEnum
    having?: productvariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductvariantCountAggregateInputType | true
    _avg?: ProductvariantAvgAggregateInputType
    _sum?: ProductvariantSumAggregateInputType
    _min?: ProductvariantMinAggregateInputType
    _max?: ProductvariantMaxAggregateInputType
  }

  export type ProductvariantGroupByOutputType = {
    id: number
    additionalprice: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    sizeid: string
    imageid: number | null
    _count: ProductvariantCountAggregateOutputType | null
    _avg: ProductvariantAvgAggregateOutputType | null
    _sum: ProductvariantSumAggregateOutputType | null
    _min: ProductvariantMinAggregateOutputType | null
    _max: ProductvariantMaxAggregateOutputType | null
  }

  type GetProductvariantGroupByPayload<T extends productvariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductvariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductvariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductvariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductvariantGroupByOutputType[P]>
        }
      >
    >


  export type productvariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    additionalprice?: boolean
    stockquantity?: boolean
    sku?: boolean
    productid?: boolean
    colorid?: boolean
    sizeid?: boolean
    imageid?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    image?: boolean | productvariant$imageArgs<ExtArgs>
    color?: boolean | colorDefaultArgs<ExtArgs>
    size?: boolean | sizeDefaultArgs<ExtArgs>
    orderItem?: boolean | productvariant$orderItemArgs<ExtArgs>
    _count?: boolean | ProductvariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productvariant"]>

  export type productvariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    additionalprice?: boolean
    stockquantity?: boolean
    sku?: boolean
    productid?: boolean
    colorid?: boolean
    sizeid?: boolean
    imageid?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    image?: boolean | productvariant$imageArgs<ExtArgs>
    color?: boolean | colorDefaultArgs<ExtArgs>
    size?: boolean | sizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productvariant"]>

  export type productvariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    additionalprice?: boolean
    stockquantity?: boolean
    sku?: boolean
    productid?: boolean
    colorid?: boolean
    sizeid?: boolean
    imageid?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    image?: boolean | productvariant$imageArgs<ExtArgs>
    color?: boolean | colorDefaultArgs<ExtArgs>
    size?: boolean | sizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productvariant"]>

  export type productvariantSelectScalar = {
    id?: boolean
    additionalprice?: boolean
    stockquantity?: boolean
    sku?: boolean
    productid?: boolean
    colorid?: boolean
    sizeid?: boolean
    imageid?: boolean
  }

  export type productvariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "additionalprice" | "stockquantity" | "sku" | "productid" | "colorid" | "sizeid" | "imageid", ExtArgs["result"]["productvariant"]>
  export type productvariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    image?: boolean | productvariant$imageArgs<ExtArgs>
    color?: boolean | colorDefaultArgs<ExtArgs>
    size?: boolean | sizeDefaultArgs<ExtArgs>
    orderItem?: boolean | productvariant$orderItemArgs<ExtArgs>
    _count?: boolean | ProductvariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productvariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    image?: boolean | productvariant$imageArgs<ExtArgs>
    color?: boolean | colorDefaultArgs<ExtArgs>
    size?: boolean | sizeDefaultArgs<ExtArgs>
  }
  export type productvariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    image?: boolean | productvariant$imageArgs<ExtArgs>
    color?: boolean | colorDefaultArgs<ExtArgs>
    size?: boolean | sizeDefaultArgs<ExtArgs>
  }

  export type $productvariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productvariant"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      image: Prisma.$productimagePayload<ExtArgs> | null
      color: Prisma.$colorPayload<ExtArgs>
      size: Prisma.$sizePayload<ExtArgs>
      orderItem: Prisma.$orderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      additionalprice: number | null
      stockquantity: number
      sku: string
      productid: number
      colorid: string
      sizeid: string
      imageid: number | null
    }, ExtArgs["result"]["productvariant"]>
    composites: {}
  }

  type productvariantGetPayload<S extends boolean | null | undefined | productvariantDefaultArgs> = $Result.GetResult<Prisma.$productvariantPayload, S>

  type productvariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productvariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductvariantCountAggregateInputType | true
    }

  export interface productvariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productvariant'], meta: { name: 'productvariant' } }
    /**
     * Find zero or one Productvariant that matches the filter.
     * @param {productvariantFindUniqueArgs} args - Arguments to find a Productvariant
     * @example
     * // Get one Productvariant
     * const productvariant = await prisma.productvariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productvariantFindUniqueArgs>(args: SelectSubset<T, productvariantFindUniqueArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productvariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productvariantFindUniqueOrThrowArgs} args - Arguments to find a Productvariant
     * @example
     * // Get one Productvariant
     * const productvariant = await prisma.productvariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productvariantFindUniqueOrThrowArgs>(args: SelectSubset<T, productvariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productvariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productvariantFindFirstArgs} args - Arguments to find a Productvariant
     * @example
     * // Get one Productvariant
     * const productvariant = await prisma.productvariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productvariantFindFirstArgs>(args?: SelectSubset<T, productvariantFindFirstArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productvariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productvariantFindFirstOrThrowArgs} args - Arguments to find a Productvariant
     * @example
     * // Get one Productvariant
     * const productvariant = await prisma.productvariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productvariantFindFirstOrThrowArgs>(args?: SelectSubset<T, productvariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productvariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productvariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productvariants
     * const productvariants = await prisma.productvariant.findMany()
     * 
     * // Get first 10 Productvariants
     * const productvariants = await prisma.productvariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productvariantWithIdOnly = await prisma.productvariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productvariantFindManyArgs>(args?: SelectSubset<T, productvariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productvariant.
     * @param {productvariantCreateArgs} args - Arguments to create a Productvariant.
     * @example
     * // Create one Productvariant
     * const Productvariant = await prisma.productvariant.create({
     *   data: {
     *     // ... data to create a Productvariant
     *   }
     * })
     * 
     */
    create<T extends productvariantCreateArgs>(args: SelectSubset<T, productvariantCreateArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productvariants.
     * @param {productvariantCreateManyArgs} args - Arguments to create many Productvariants.
     * @example
     * // Create many Productvariants
     * const productvariant = await prisma.productvariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productvariantCreateManyArgs>(args?: SelectSubset<T, productvariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productvariants and returns the data saved in the database.
     * @param {productvariantCreateManyAndReturnArgs} args - Arguments to create many Productvariants.
     * @example
     * // Create many Productvariants
     * const productvariant = await prisma.productvariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productvariants and only return the `id`
     * const productvariantWithIdOnly = await prisma.productvariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productvariantCreateManyAndReturnArgs>(args?: SelectSubset<T, productvariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productvariant.
     * @param {productvariantDeleteArgs} args - Arguments to delete one Productvariant.
     * @example
     * // Delete one Productvariant
     * const Productvariant = await prisma.productvariant.delete({
     *   where: {
     *     // ... filter to delete one Productvariant
     *   }
     * })
     * 
     */
    delete<T extends productvariantDeleteArgs>(args: SelectSubset<T, productvariantDeleteArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productvariant.
     * @param {productvariantUpdateArgs} args - Arguments to update one Productvariant.
     * @example
     * // Update one Productvariant
     * const productvariant = await prisma.productvariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productvariantUpdateArgs>(args: SelectSubset<T, productvariantUpdateArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productvariants.
     * @param {productvariantDeleteManyArgs} args - Arguments to filter Productvariants to delete.
     * @example
     * // Delete a few Productvariants
     * const { count } = await prisma.productvariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productvariantDeleteManyArgs>(args?: SelectSubset<T, productvariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productvariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productvariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productvariants
     * const productvariant = await prisma.productvariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productvariantUpdateManyArgs>(args: SelectSubset<T, productvariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productvariants and returns the data updated in the database.
     * @param {productvariantUpdateManyAndReturnArgs} args - Arguments to update many Productvariants.
     * @example
     * // Update many Productvariants
     * const productvariant = await prisma.productvariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productvariants and only return the `id`
     * const productvariantWithIdOnly = await prisma.productvariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productvariantUpdateManyAndReturnArgs>(args: SelectSubset<T, productvariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productvariant.
     * @param {productvariantUpsertArgs} args - Arguments to update or create a Productvariant.
     * @example
     * // Update or create a Productvariant
     * const productvariant = await prisma.productvariant.upsert({
     *   create: {
     *     // ... data to create a Productvariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productvariant we want to update
     *   }
     * })
     */
    upsert<T extends productvariantUpsertArgs>(args: SelectSubset<T, productvariantUpsertArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productvariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productvariantCountArgs} args - Arguments to filter Productvariants to count.
     * @example
     * // Count the number of Productvariants
     * const count = await prisma.productvariant.count({
     *   where: {
     *     // ... the filter for the Productvariants we want to count
     *   }
     * })
    **/
    count<T extends productvariantCountArgs>(
      args?: Subset<T, productvariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductvariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productvariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductvariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductvariantAggregateArgs>(args: Subset<T, ProductvariantAggregateArgs>): Prisma.PrismaPromise<GetProductvariantAggregateType<T>>

    /**
     * Group by Productvariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productvariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productvariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productvariantGroupByArgs['orderBy'] }
        : { orderBy?: productvariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productvariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductvariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productvariant model
   */
  readonly fields: productvariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productvariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productvariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends productvariant$imageArgs<ExtArgs> = {}>(args?: Subset<T, productvariant$imageArgs<ExtArgs>>): Prisma__productimageClient<$Result.GetResult<Prisma.$productimagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    color<T extends colorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, colorDefaultArgs<ExtArgs>>): Prisma__colorClient<$Result.GetResult<Prisma.$colorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    size<T extends sizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sizeDefaultArgs<ExtArgs>>): Prisma__sizeClient<$Result.GetResult<Prisma.$sizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItem<T extends productvariant$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, productvariant$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productvariant model
   */
  interface productvariantFieldRefs {
    readonly id: FieldRef<"productvariant", 'Int'>
    readonly additionalprice: FieldRef<"productvariant", 'Int'>
    readonly stockquantity: FieldRef<"productvariant", 'Int'>
    readonly sku: FieldRef<"productvariant", 'String'>
    readonly productid: FieldRef<"productvariant", 'Int'>
    readonly colorid: FieldRef<"productvariant", 'String'>
    readonly sizeid: FieldRef<"productvariant", 'String'>
    readonly imageid: FieldRef<"productvariant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * productvariant findUnique
   */
  export type productvariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * Filter, which productvariant to fetch.
     */
    where: productvariantWhereUniqueInput
  }

  /**
   * productvariant findUniqueOrThrow
   */
  export type productvariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * Filter, which productvariant to fetch.
     */
    where: productvariantWhereUniqueInput
  }

  /**
   * productvariant findFirst
   */
  export type productvariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * Filter, which productvariant to fetch.
     */
    where?: productvariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productvariants to fetch.
     */
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productvariants.
     */
    cursor?: productvariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productvariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productvariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productvariants.
     */
    distinct?: ProductvariantScalarFieldEnum | ProductvariantScalarFieldEnum[]
  }

  /**
   * productvariant findFirstOrThrow
   */
  export type productvariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * Filter, which productvariant to fetch.
     */
    where?: productvariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productvariants to fetch.
     */
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productvariants.
     */
    cursor?: productvariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productvariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productvariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productvariants.
     */
    distinct?: ProductvariantScalarFieldEnum | ProductvariantScalarFieldEnum[]
  }

  /**
   * productvariant findMany
   */
  export type productvariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * Filter, which productvariants to fetch.
     */
    where?: productvariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productvariants to fetch.
     */
    orderBy?: productvariantOrderByWithRelationInput | productvariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productvariants.
     */
    cursor?: productvariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productvariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productvariants.
     */
    skip?: number
    distinct?: ProductvariantScalarFieldEnum | ProductvariantScalarFieldEnum[]
  }

  /**
   * productvariant create
   */
  export type productvariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * The data needed to create a productvariant.
     */
    data: XOR<productvariantCreateInput, productvariantUncheckedCreateInput>
  }

  /**
   * productvariant createMany
   */
  export type productvariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productvariants.
     */
    data: productvariantCreateManyInput | productvariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productvariant createManyAndReturn
   */
  export type productvariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * The data used to create many productvariants.
     */
    data: productvariantCreateManyInput | productvariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productvariant update
   */
  export type productvariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * The data needed to update a productvariant.
     */
    data: XOR<productvariantUpdateInput, productvariantUncheckedUpdateInput>
    /**
     * Choose, which productvariant to update.
     */
    where: productvariantWhereUniqueInput
  }

  /**
   * productvariant updateMany
   */
  export type productvariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productvariants.
     */
    data: XOR<productvariantUpdateManyMutationInput, productvariantUncheckedUpdateManyInput>
    /**
     * Filter which productvariants to update
     */
    where?: productvariantWhereInput
    /**
     * Limit how many productvariants to update.
     */
    limit?: number
  }

  /**
   * productvariant updateManyAndReturn
   */
  export type productvariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * The data used to update productvariants.
     */
    data: XOR<productvariantUpdateManyMutationInput, productvariantUncheckedUpdateManyInput>
    /**
     * Filter which productvariants to update
     */
    where?: productvariantWhereInput
    /**
     * Limit how many productvariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productvariant upsert
   */
  export type productvariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * The filter to search for the productvariant to update in case it exists.
     */
    where: productvariantWhereUniqueInput
    /**
     * In case the productvariant found by the `where` argument doesn't exist, create a new productvariant with this data.
     */
    create: XOR<productvariantCreateInput, productvariantUncheckedCreateInput>
    /**
     * In case the productvariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productvariantUpdateInput, productvariantUncheckedUpdateInput>
  }

  /**
   * productvariant delete
   */
  export type productvariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    /**
     * Filter which productvariant to delete.
     */
    where: productvariantWhereUniqueInput
  }

  /**
   * productvariant deleteMany
   */
  export type productvariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productvariants to delete
     */
    where?: productvariantWhereInput
    /**
     * Limit how many productvariants to delete.
     */
    limit?: number
  }

  /**
   * productvariant.image
   */
  export type productvariant$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productimage
     */
    select?: productimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productimage
     */
    omit?: productimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productimageInclude<ExtArgs> | null
    where?: productimageWhereInput
  }

  /**
   * productvariant.orderItem
   */
  export type productvariant$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * productvariant without action
   */
  export type productvariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    username: string | null
    displayname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    displayname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    displayname: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    displayname?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    displayname?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    displayname?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    username: string
    displayname: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userRoles?: boolean | user$userRolesArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    userId?: boolean
    username?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "displayname" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | user$userRolesArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      orders: Prisma.$orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      displayname: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends user$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, user$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends user$ordersArgs<ExtArgs> = {}>(args?: Subset<T, user$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly userId: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly displayname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.userRoles
   */
  export type user$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * user.orders
   */
  export type user$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: string | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: string | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    roleId?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: string
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    name?: boolean
    userRoles?: boolean | role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    roleId?: boolean
    name?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "name", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: string
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends role$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, role$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly roleId: FieldRef<"role", 'String'>
    readonly name: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.userRoles
   */
  export type role$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalPrice: number | null
    shippingFee: number | null
    status: number | null
    paymentStatus: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalPrice: number | null
    shippingFee: number | null
    status: number | null
    paymentStatus: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalPrice: number | null
    shippingFee: number | null
    status: number | null
    paymentMethod: string | null
    paymentStatus: number | null
    recipientName: string | null
    phone: string | null
    address: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalPrice: number | null
    shippingFee: number | null
    status: number | null
    paymentMethod: string | null
    paymentStatus: number | null
    recipientName: string | null
    phone: string | null
    address: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    totalPrice: number
    shippingFee: number
    status: number
    paymentMethod: number
    paymentStatus: number
    recipientName: number
    phone: number
    address: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalPrice?: true
    shippingFee?: true
    status?: true
    paymentStatus?: true
  }

  export type OrderSumAggregateInputType = {
    totalPrice?: true
    shippingFee?: true
    status?: true
    paymentStatus?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    shippingFee?: true
    status?: true
    paymentMethod?: true
    paymentStatus?: true
    recipientName?: true
    phone?: true
    address?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    shippingFee?: true
    status?: true
    paymentMethod?: true
    paymentStatus?: true
    recipientName?: true
    phone?: true
    address?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    shippingFee?: true
    status?: true
    paymentMethod?: true
    paymentStatus?: true
    recipientName?: true
    phone?: true
    address?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string | null
    totalPrice: number
    shippingFee: number
    status: number
    paymentMethod: string
    paymentStatus: number
    recipientName: string
    phone: string
    address: string
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    shippingFee?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    recipientName?: boolean
    phone?: boolean
    address?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | order$userArgs<ExtArgs>
    items?: boolean | order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    shippingFee?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    recipientName?: boolean
    phone?: boolean
    address?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    shippingFee?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    recipientName?: boolean
    phone?: boolean
    address?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    shippingFee?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    recipientName?: boolean
    phone?: boolean
    address?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalPrice" | "shippingFee" | "status" | "paymentMethod" | "paymentStatus" | "recipientName" | "phone" | "address" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
    items?: boolean | order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
  }
  export type orderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      items: Prisma.$orderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      totalPrice: number
      shippingFee: number
      status: number
      paymentMethod: string
      paymentStatus: number
      recipientName: string
      phone: string
      address: string
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {orderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {orderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends order$userArgs<ExtArgs> = {}>(args?: Subset<T, order$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'String'>
    readonly userId: FieldRef<"order", 'String'>
    readonly totalPrice: FieldRef<"order", 'Int'>
    readonly shippingFee: FieldRef<"order", 'Int'>
    readonly status: FieldRef<"order", 'Int'>
    readonly paymentMethod: FieldRef<"order", 'String'>
    readonly paymentStatus: FieldRef<"order", 'Int'>
    readonly recipientName: FieldRef<"order", 'String'>
    readonly phone: FieldRef<"order", 'String'>
    readonly address: FieldRef<"order", 'String'>
    readonly note: FieldRef<"order", 'String'>
    readonly createdAt: FieldRef<"order", 'DateTime'>
    readonly updatedAt: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order createManyAndReturn
   */
  export type orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order updateManyAndReturn
   */
  export type orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.user
   */
  export type order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * order.items
   */
  export type order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model orderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    productId: number | null
    variantId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    productId: number | null
    variantId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    variantId: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemSumAggregateInputType = {
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItem to aggregate.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type orderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithAggregationInput | orderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: orderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: number
    variantId: number | null
    quantity: number
    price: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends orderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type orderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    variant?: boolean | orderItem$variantArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    variant?: boolean | orderItem$variantArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    variant?: boolean | orderItem$variantArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type orderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "variantId" | "quantity" | "price", ExtArgs["result"]["orderItem"]>
  export type orderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    variant?: boolean | orderItem$variantArgs<ExtArgs>
  }
  export type orderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    variant?: boolean | orderItem$variantArgs<ExtArgs>
  }
  export type orderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    variant?: boolean | orderItem$variantArgs<ExtArgs>
  }

  export type $orderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderItem"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
      variant: Prisma.$productvariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: number
      variantId: number | null
      quantity: number
      price: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type orderItemGetPayload<S extends boolean | null | undefined | orderItemDefaultArgs> = $Result.GetResult<Prisma.$orderItemPayload, S>

  type orderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface orderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderItem'], meta: { name: 'orderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {orderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderItemFindUniqueArgs>(args: SelectSubset<T, orderItemFindUniqueArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, orderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderItemFindFirstArgs>(args?: SelectSubset<T, orderItemFindFirstArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, orderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderItemFindManyArgs>(args?: SelectSubset<T, orderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {orderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends orderItemCreateArgs>(args: SelectSubset<T, orderItemCreateArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {orderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderItemCreateManyArgs>(args?: SelectSubset<T, orderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {orderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, orderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {orderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends orderItemDeleteArgs>(args: SelectSubset<T, orderItemDeleteArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {orderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderItemUpdateArgs>(args: SelectSubset<T, orderItemUpdateArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {orderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderItemDeleteManyArgs>(args?: SelectSubset<T, orderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderItemUpdateManyArgs>(args: SelectSubset<T, orderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {orderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, orderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {orderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends orderItemUpsertArgs>(args: SelectSubset<T, orderItemUpsertArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends orderItemCountArgs>(
      args?: Subset<T, orderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderItemGroupByArgs['orderBy'] }
        : { orderBy?: orderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderItem model
   */
  readonly fields: orderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variant<T extends orderItem$variantArgs<ExtArgs> = {}>(args?: Subset<T, orderItem$variantArgs<ExtArgs>>): Prisma__productvariantClient<$Result.GetResult<Prisma.$productvariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderItem model
   */
  interface orderItemFieldRefs {
    readonly id: FieldRef<"orderItem", 'String'>
    readonly orderId: FieldRef<"orderItem", 'String'>
    readonly productId: FieldRef<"orderItem", 'Int'>
    readonly variantId: FieldRef<"orderItem", 'Int'>
    readonly quantity: FieldRef<"orderItem", 'Int'>
    readonly price: FieldRef<"orderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orderItem findUnique
   */
  export type orderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem findUniqueOrThrow
   */
  export type orderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem findFirst
   */
  export type orderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem findFirstOrThrow
   */
  export type orderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem findMany
   */
  export type orderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem create
   */
  export type orderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a orderItem.
     */
    data: XOR<orderItemCreateInput, orderItemUncheckedCreateInput>
  }

  /**
   * orderItem createMany
   */
  export type orderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderItems.
     */
    data: orderItemCreateManyInput | orderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderItem createManyAndReturn
   */
  export type orderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * The data used to create many orderItems.
     */
    data: orderItemCreateManyInput | orderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItem update
   */
  export type orderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a orderItem.
     */
    data: XOR<orderItemUpdateInput, orderItemUncheckedUpdateInput>
    /**
     * Choose, which orderItem to update.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem updateMany
   */
  export type orderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
  }

  /**
   * orderItem updateManyAndReturn
   */
  export type orderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItem upsert
   */
  export type orderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the orderItem to update in case it exists.
     */
    where: orderItemWhereUniqueInput
    /**
     * In case the orderItem found by the `where` argument doesn't exist, create a new orderItem with this data.
     */
    create: XOR<orderItemCreateInput, orderItemUncheckedCreateInput>
    /**
     * In case the orderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderItemUpdateInput, orderItemUncheckedUpdateInput>
  }

  /**
   * orderItem delete
   */
  export type orderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter which orderItem to delete.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem deleteMany
   */
  export type orderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItems to delete
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to delete.
     */
    limit?: number
  }

  /**
   * orderItem.variant
   */
  export type orderItem$variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productvariant
     */
    select?: productvariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productvariant
     */
    omit?: productvariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productvariantInclude<ExtArgs> | null
    where?: productvariantWhereInput
  }

  /**
   * orderItem without action
   */
  export type orderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categorystatus: 'categorystatus',
    image: 'image',
    slug: 'slug',
    parentcategoryid: 'parentcategoryid',
    isshow: 'isshow'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    sku: 'sku',
    price: 'price',
    discountprice: 'discountprice',
    status: 'status',
    isfeatured: 'isfeatured'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductcategoryScalarFieldEnum: {
    productid: 'productid',
    categoryid: 'categoryid'
  };

  export type ProductcategoryScalarFieldEnum = (typeof ProductcategoryScalarFieldEnum)[keyof typeof ProductcategoryScalarFieldEnum]


  export const ProductimageScalarFieldEnum: {
    id: 'id',
    imageurl: 'imageurl',
    displayorder: 'displayorder',
    productid: 'productid'
  };

  export type ProductimageScalarFieldEnum = (typeof ProductimageScalarFieldEnum)[keyof typeof ProductimageScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    index: 'index'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const ColorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type ColorScalarFieldEnum = (typeof ColorScalarFieldEnum)[keyof typeof ColorScalarFieldEnum]


  export const ProductvariantScalarFieldEnum: {
    id: 'id',
    additionalprice: 'additionalprice',
    stockquantity: 'stockquantity',
    sku: 'sku',
    productid: 'productid',
    colorid: 'colorid',
    sizeid: 'sizeid',
    imageid: 'imageid'
  };

  export type ProductvariantScalarFieldEnum = (typeof ProductvariantScalarFieldEnum)[keyof typeof ProductvariantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    displayname: 'displayname',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalPrice: 'totalPrice',
    shippingFee: 'shippingFee',
    status: 'status',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    recipientName: 'recipientName',
    phone: 'phone',
    address: 'address',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    variantId: 'variantId',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    categorystatus?: IntFilter<"category"> | number
    image?: StringNullableFilter<"category"> | string | null
    slug?: StringNullableFilter<"category"> | string | null
    parentcategoryid?: IntNullableFilter<"category"> | number | null
    isshow?: BoolFilter<"category"> | boolean
    parentcategory?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    childcategory?: CategoryListRelationFilter
    productcategory?: ProductcategoryListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categorystatus?: SortOrder
    image?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    parentcategoryid?: SortOrderInput | SortOrder
    isshow?: SortOrder
    parentcategory?: categoryOrderByWithRelationInput
    childcategory?: categoryOrderByRelationAggregateInput
    productcategory?: productcategoryOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    categorystatus?: IntFilter<"category"> | number
    image?: StringNullableFilter<"category"> | string | null
    slug?: StringNullableFilter<"category"> | string | null
    parentcategoryid?: IntNullableFilter<"category"> | number | null
    isshow?: BoolFilter<"category"> | boolean
    parentcategory?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    childcategory?: CategoryListRelationFilter
    productcategory?: ProductcategoryListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categorystatus?: SortOrder
    image?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    parentcategoryid?: SortOrderInput | SortOrder
    isshow?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    description?: StringNullableWithAggregatesFilter<"category"> | string | null
    categorystatus?: IntWithAggregatesFilter<"category"> | number
    image?: StringNullableWithAggregatesFilter<"category"> | string | null
    slug?: StringNullableWithAggregatesFilter<"category"> | string | null
    parentcategoryid?: IntNullableWithAggregatesFilter<"category"> | number | null
    isshow?: BoolWithAggregatesFilter<"category"> | boolean
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    slug?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    sku?: StringFilter<"product"> | string
    price?: IntFilter<"product"> | number
    discountprice?: IntNullableFilter<"product"> | number | null
    status?: IntFilter<"product"> | number
    isfeatured?: BoolFilter<"product"> | boolean
    productcategory?: ProductcategoryListRelationFilter
    productimage?: ProductimageListRelationFilter
    productvariant?: ProductvariantListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountprice?: SortOrderInput | SortOrder
    status?: SortOrder
    isfeatured?: SortOrder
    productcategory?: productcategoryOrderByRelationAggregateInput
    productimage?: productimageOrderByRelationAggregateInput
    productvariant?: productvariantOrderByRelationAggregateInput
    orderItem?: orderItemOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    slug?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    sku?: StringFilter<"product"> | string
    price?: IntFilter<"product"> | number
    discountprice?: IntNullableFilter<"product"> | number | null
    status?: IntFilter<"product"> | number
    isfeatured?: BoolFilter<"product"> | boolean
    productcategory?: ProductcategoryListRelationFilter
    productimage?: ProductimageListRelationFilter
    productvariant?: ProductvariantListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountprice?: SortOrderInput | SortOrder
    status?: SortOrder
    isfeatured?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    slug?: StringWithAggregatesFilter<"product"> | string
    description?: StringWithAggregatesFilter<"product"> | string
    sku?: StringWithAggregatesFilter<"product"> | string
    price?: IntWithAggregatesFilter<"product"> | number
    discountprice?: IntNullableWithAggregatesFilter<"product"> | number | null
    status?: IntWithAggregatesFilter<"product"> | number
    isfeatured?: BoolWithAggregatesFilter<"product"> | boolean
  }

  export type productcategoryWhereInput = {
    AND?: productcategoryWhereInput | productcategoryWhereInput[]
    OR?: productcategoryWhereInput[]
    NOT?: productcategoryWhereInput | productcategoryWhereInput[]
    productid?: IntFilter<"productcategory"> | number
    categoryid?: IntFilter<"productcategory"> | number
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type productcategoryOrderByWithRelationInput = {
    productid?: SortOrder
    categoryid?: SortOrder
    category?: categoryOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type productcategoryWhereUniqueInput = Prisma.AtLeast<{
    productid_categoryid?: productcategoryProductidCategoryidCompoundUniqueInput
    AND?: productcategoryWhereInput | productcategoryWhereInput[]
    OR?: productcategoryWhereInput[]
    NOT?: productcategoryWhereInput | productcategoryWhereInput[]
    productid?: IntFilter<"productcategory"> | number
    categoryid?: IntFilter<"productcategory"> | number
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "productid_categoryid">

  export type productcategoryOrderByWithAggregationInput = {
    productid?: SortOrder
    categoryid?: SortOrder
    _count?: productcategoryCountOrderByAggregateInput
    _avg?: productcategoryAvgOrderByAggregateInput
    _max?: productcategoryMaxOrderByAggregateInput
    _min?: productcategoryMinOrderByAggregateInput
    _sum?: productcategorySumOrderByAggregateInput
  }

  export type productcategoryScalarWhereWithAggregatesInput = {
    AND?: productcategoryScalarWhereWithAggregatesInput | productcategoryScalarWhereWithAggregatesInput[]
    OR?: productcategoryScalarWhereWithAggregatesInput[]
    NOT?: productcategoryScalarWhereWithAggregatesInput | productcategoryScalarWhereWithAggregatesInput[]
    productid?: IntWithAggregatesFilter<"productcategory"> | number
    categoryid?: IntWithAggregatesFilter<"productcategory"> | number
  }

  export type productimageWhereInput = {
    AND?: productimageWhereInput | productimageWhereInput[]
    OR?: productimageWhereInput[]
    NOT?: productimageWhereInput | productimageWhereInput[]
    id?: IntFilter<"productimage"> | number
    imageurl?: StringFilter<"productimage"> | string
    displayorder?: IntNullableFilter<"productimage"> | number | null
    productid?: IntNullableFilter<"productimage"> | number | null
    product?: XOR<ProductNullableScalarRelationFilter, productWhereInput> | null
    productvariant?: ProductvariantListRelationFilter
  }

  export type productimageOrderByWithRelationInput = {
    id?: SortOrder
    imageurl?: SortOrder
    displayorder?: SortOrderInput | SortOrder
    productid?: SortOrderInput | SortOrder
    product?: productOrderByWithRelationInput
    productvariant?: productvariantOrderByRelationAggregateInput
  }

  export type productimageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productimageWhereInput | productimageWhereInput[]
    OR?: productimageWhereInput[]
    NOT?: productimageWhereInput | productimageWhereInput[]
    imageurl?: StringFilter<"productimage"> | string
    displayorder?: IntNullableFilter<"productimage"> | number | null
    productid?: IntNullableFilter<"productimage"> | number | null
    product?: XOR<ProductNullableScalarRelationFilter, productWhereInput> | null
    productvariant?: ProductvariantListRelationFilter
  }, "id">

  export type productimageOrderByWithAggregationInput = {
    id?: SortOrder
    imageurl?: SortOrder
    displayorder?: SortOrderInput | SortOrder
    productid?: SortOrderInput | SortOrder
    _count?: productimageCountOrderByAggregateInput
    _avg?: productimageAvgOrderByAggregateInput
    _max?: productimageMaxOrderByAggregateInput
    _min?: productimageMinOrderByAggregateInput
    _sum?: productimageSumOrderByAggregateInput
  }

  export type productimageScalarWhereWithAggregatesInput = {
    AND?: productimageScalarWhereWithAggregatesInput | productimageScalarWhereWithAggregatesInput[]
    OR?: productimageScalarWhereWithAggregatesInput[]
    NOT?: productimageScalarWhereWithAggregatesInput | productimageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productimage"> | number
    imageurl?: StringWithAggregatesFilter<"productimage"> | string
    displayorder?: IntNullableWithAggregatesFilter<"productimage"> | number | null
    productid?: IntNullableWithAggregatesFilter<"productimage"> | number | null
  }

  export type sizeWhereInput = {
    AND?: sizeWhereInput | sizeWhereInput[]
    OR?: sizeWhereInput[]
    NOT?: sizeWhereInput | sizeWhereInput[]
    id?: StringFilter<"size"> | string
    name?: StringNullableFilter<"size"> | string | null
    description?: StringFilter<"size"> | string
    index?: IntFilter<"size"> | number
    productvariant?: ProductvariantListRelationFilter
  }

  export type sizeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrder
    index?: SortOrder
    productvariant?: productvariantOrderByRelationAggregateInput
  }

  export type sizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sizeWhereInput | sizeWhereInput[]
    OR?: sizeWhereInput[]
    NOT?: sizeWhereInput | sizeWhereInput[]
    name?: StringNullableFilter<"size"> | string | null
    description?: StringFilter<"size"> | string
    index?: IntFilter<"size"> | number
    productvariant?: ProductvariantListRelationFilter
  }, "id">

  export type sizeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrder
    index?: SortOrder
    _count?: sizeCountOrderByAggregateInput
    _avg?: sizeAvgOrderByAggregateInput
    _max?: sizeMaxOrderByAggregateInput
    _min?: sizeMinOrderByAggregateInput
    _sum?: sizeSumOrderByAggregateInput
  }

  export type sizeScalarWhereWithAggregatesInput = {
    AND?: sizeScalarWhereWithAggregatesInput | sizeScalarWhereWithAggregatesInput[]
    OR?: sizeScalarWhereWithAggregatesInput[]
    NOT?: sizeScalarWhereWithAggregatesInput | sizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"size"> | string
    name?: StringNullableWithAggregatesFilter<"size"> | string | null
    description?: StringWithAggregatesFilter<"size"> | string
    index?: IntWithAggregatesFilter<"size"> | number
  }

  export type colorWhereInput = {
    AND?: colorWhereInput | colorWhereInput[]
    OR?: colorWhereInput[]
    NOT?: colorWhereInput | colorWhereInput[]
    id?: StringFilter<"color"> | string
    name?: StringFilter<"color"> | string
    code?: StringFilter<"color"> | string
    productvariant?: ProductvariantListRelationFilter
  }

  export type colorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    productvariant?: productvariantOrderByRelationAggregateInput
  }

  export type colorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: colorWhereInput | colorWhereInput[]
    OR?: colorWhereInput[]
    NOT?: colorWhereInput | colorWhereInput[]
    name?: StringFilter<"color"> | string
    code?: StringFilter<"color"> | string
    productvariant?: ProductvariantListRelationFilter
  }, "id">

  export type colorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    _count?: colorCountOrderByAggregateInput
    _max?: colorMaxOrderByAggregateInput
    _min?: colorMinOrderByAggregateInput
  }

  export type colorScalarWhereWithAggregatesInput = {
    AND?: colorScalarWhereWithAggregatesInput | colorScalarWhereWithAggregatesInput[]
    OR?: colorScalarWhereWithAggregatesInput[]
    NOT?: colorScalarWhereWithAggregatesInput | colorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"color"> | string
    name?: StringWithAggregatesFilter<"color"> | string
    code?: StringWithAggregatesFilter<"color"> | string
  }

  export type productvariantWhereInput = {
    AND?: productvariantWhereInput | productvariantWhereInput[]
    OR?: productvariantWhereInput[]
    NOT?: productvariantWhereInput | productvariantWhereInput[]
    id?: IntFilter<"productvariant"> | number
    additionalprice?: IntNullableFilter<"productvariant"> | number | null
    stockquantity?: IntFilter<"productvariant"> | number
    sku?: StringFilter<"productvariant"> | string
    productid?: IntFilter<"productvariant"> | number
    colorid?: StringFilter<"productvariant"> | string
    sizeid?: StringFilter<"productvariant"> | string
    imageid?: IntNullableFilter<"productvariant"> | number | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    image?: XOR<ProductimageNullableScalarRelationFilter, productimageWhereInput> | null
    color?: XOR<ColorScalarRelationFilter, colorWhereInput>
    size?: XOR<SizeScalarRelationFilter, sizeWhereInput>
    orderItem?: OrderItemListRelationFilter
  }

  export type productvariantOrderByWithRelationInput = {
    id?: SortOrder
    additionalprice?: SortOrderInput | SortOrder
    stockquantity?: SortOrder
    sku?: SortOrder
    productid?: SortOrder
    colorid?: SortOrder
    sizeid?: SortOrder
    imageid?: SortOrderInput | SortOrder
    product?: productOrderByWithRelationInput
    image?: productimageOrderByWithRelationInput
    color?: colorOrderByWithRelationInput
    size?: sizeOrderByWithRelationInput
    orderItem?: orderItemOrderByRelationAggregateInput
  }

  export type productvariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productvariantWhereInput | productvariantWhereInput[]
    OR?: productvariantWhereInput[]
    NOT?: productvariantWhereInput | productvariantWhereInput[]
    additionalprice?: IntNullableFilter<"productvariant"> | number | null
    stockquantity?: IntFilter<"productvariant"> | number
    sku?: StringFilter<"productvariant"> | string
    productid?: IntFilter<"productvariant"> | number
    colorid?: StringFilter<"productvariant"> | string
    sizeid?: StringFilter<"productvariant"> | string
    imageid?: IntNullableFilter<"productvariant"> | number | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    image?: XOR<ProductimageNullableScalarRelationFilter, productimageWhereInput> | null
    color?: XOR<ColorScalarRelationFilter, colorWhereInput>
    size?: XOR<SizeScalarRelationFilter, sizeWhereInput>
    orderItem?: OrderItemListRelationFilter
  }, "id">

  export type productvariantOrderByWithAggregationInput = {
    id?: SortOrder
    additionalprice?: SortOrderInput | SortOrder
    stockquantity?: SortOrder
    sku?: SortOrder
    productid?: SortOrder
    colorid?: SortOrder
    sizeid?: SortOrder
    imageid?: SortOrderInput | SortOrder
    _count?: productvariantCountOrderByAggregateInput
    _avg?: productvariantAvgOrderByAggregateInput
    _max?: productvariantMaxOrderByAggregateInput
    _min?: productvariantMinOrderByAggregateInput
    _sum?: productvariantSumOrderByAggregateInput
  }

  export type productvariantScalarWhereWithAggregatesInput = {
    AND?: productvariantScalarWhereWithAggregatesInput | productvariantScalarWhereWithAggregatesInput[]
    OR?: productvariantScalarWhereWithAggregatesInput[]
    NOT?: productvariantScalarWhereWithAggregatesInput | productvariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productvariant"> | number
    additionalprice?: IntNullableWithAggregatesFilter<"productvariant"> | number | null
    stockquantity?: IntWithAggregatesFilter<"productvariant"> | number
    sku?: StringWithAggregatesFilter<"productvariant"> | string
    productid?: IntWithAggregatesFilter<"productvariant"> | number
    colorid?: StringWithAggregatesFilter<"productvariant"> | string
    sizeid?: StringWithAggregatesFilter<"productvariant"> | string
    imageid?: IntNullableWithAggregatesFilter<"productvariant"> | number | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userId?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    displayname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    userRoles?: UserRoleListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
    orders?: orderOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    displayname?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    userRoles?: UserRoleListRelationFilter
    orders?: OrderListRelationFilter
  }, "userId" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    displayname?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    roleId?: StringFilter<"role"> | string
    name?: StringFilter<"role"> | string
    userRoles?: UserRoleListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    roleId?: SortOrder
    name?: SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: string
    name?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    userRoles?: UserRoleListRelationFilter
  }, "roleId" | "name">

  export type roleOrderByWithAggregationInput = {
    roleId?: SortOrder
    name?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    roleId?: StringWithAggregatesFilter<"role"> | string
    name?: StringWithAggregatesFilter<"role"> | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: userOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: StringFilter<"order"> | string
    userId?: StringNullableFilter<"order"> | string | null
    totalPrice?: IntFilter<"order"> | number
    shippingFee?: IntFilter<"order"> | number
    status?: IntFilter<"order"> | number
    paymentMethod?: StringFilter<"order"> | string
    paymentStatus?: IntFilter<"order"> | number
    recipientName?: StringFilter<"order"> | string
    phone?: StringFilter<"order"> | string
    address?: StringFilter<"order"> | string
    note?: StringNullableFilter<"order"> | string | null
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    items?: OrderItemListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    shippingFee?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    items?: orderItemOrderByRelationAggregateInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    userId?: StringNullableFilter<"order"> | string | null
    totalPrice?: IntFilter<"order"> | number
    shippingFee?: IntFilter<"order"> | number
    status?: IntFilter<"order"> | number
    paymentMethod?: StringFilter<"order"> | string
    paymentStatus?: IntFilter<"order"> | number
    recipientName?: StringFilter<"order"> | string
    phone?: StringFilter<"order"> | string
    address?: StringFilter<"order"> | string
    note?: StringNullableFilter<"order"> | string | null
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    items?: OrderItemListRelationFilter
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    shippingFee?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order"> | string
    userId?: StringNullableWithAggregatesFilter<"order"> | string | null
    totalPrice?: IntWithAggregatesFilter<"order"> | number
    shippingFee?: IntWithAggregatesFilter<"order"> | number
    status?: IntWithAggregatesFilter<"order"> | number
    paymentMethod?: StringWithAggregatesFilter<"order"> | string
    paymentStatus?: IntWithAggregatesFilter<"order"> | number
    recipientName?: StringWithAggregatesFilter<"order"> | string
    phone?: StringWithAggregatesFilter<"order"> | string
    address?: StringWithAggregatesFilter<"order"> | string
    note?: StringNullableWithAggregatesFilter<"order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type orderItemWhereInput = {
    AND?: orderItemWhereInput | orderItemWhereInput[]
    OR?: orderItemWhereInput[]
    NOT?: orderItemWhereInput | orderItemWhereInput[]
    id?: StringFilter<"orderItem"> | string
    orderId?: StringFilter<"orderItem"> | string
    productId?: IntFilter<"orderItem"> | number
    variantId?: IntNullableFilter<"orderItem"> | number | null
    quantity?: IntFilter<"orderItem"> | number
    price?: IntFilter<"orderItem"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    variant?: XOR<ProductvariantNullableScalarRelationFilter, productvariantWhereInput> | null
  }

  export type orderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: orderOrderByWithRelationInput
    product?: productOrderByWithRelationInput
    variant?: productvariantOrderByWithRelationInput
  }

  export type orderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderItemWhereInput | orderItemWhereInput[]
    OR?: orderItemWhereInput[]
    NOT?: orderItemWhereInput | orderItemWhereInput[]
    orderId?: StringFilter<"orderItem"> | string
    productId?: IntFilter<"orderItem"> | number
    variantId?: IntNullableFilter<"orderItem"> | number | null
    quantity?: IntFilter<"orderItem"> | number
    price?: IntFilter<"orderItem"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    variant?: XOR<ProductvariantNullableScalarRelationFilter, productvariantWhereInput> | null
  }, "id">

  export type orderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: orderItemCountOrderByAggregateInput
    _avg?: orderItemAvgOrderByAggregateInput
    _max?: orderItemMaxOrderByAggregateInput
    _min?: orderItemMinOrderByAggregateInput
    _sum?: orderItemSumOrderByAggregateInput
  }

  export type orderItemScalarWhereWithAggregatesInput = {
    AND?: orderItemScalarWhereWithAggregatesInput | orderItemScalarWhereWithAggregatesInput[]
    OR?: orderItemScalarWhereWithAggregatesInput[]
    NOT?: orderItemScalarWhereWithAggregatesInput | orderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"orderItem"> | string
    orderId?: StringWithAggregatesFilter<"orderItem"> | string
    productId?: IntWithAggregatesFilter<"orderItem"> | number
    variantId?: IntNullableWithAggregatesFilter<"orderItem"> | number | null
    quantity?: IntWithAggregatesFilter<"orderItem"> | number
    price?: IntWithAggregatesFilter<"orderItem"> | number
  }

  export type categoryCreateInput = {
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    isshow?: boolean
    parentcategory?: categoryCreateNestedOneWithoutChildcategoryInput
    childcategory?: categoryCreateNestedManyWithoutParentcategoryInput
    productcategory?: productcategoryCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    parentcategoryid?: number | null
    isshow?: boolean
    childcategory?: categoryUncheckedCreateNestedManyWithoutParentcategoryInput
    productcategory?: productcategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    parentcategory?: categoryUpdateOneWithoutChildcategoryNestedInput
    childcategory?: categoryUpdateManyWithoutParentcategoryNestedInput
    productcategory?: productcategoryUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentcategoryid?: NullableIntFieldUpdateOperationsInput | number | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    childcategory?: categoryUncheckedUpdateManyWithoutParentcategoryNestedInput
    productcategory?: productcategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    parentcategoryid?: number | null
    isshow?: boolean
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentcategoryid?: NullableIntFieldUpdateOperationsInput | number | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productCreateInput = {
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryCreateNestedManyWithoutProductInput
    productimage?: productimageCreateNestedManyWithoutProductInput
    productvariant?: productvariantCreateNestedManyWithoutProductInput
    orderItem?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryUncheckedCreateNestedManyWithoutProductInput
    productimage?: productimageUncheckedCreateNestedManyWithoutProductInput
    productvariant?: productvariantUncheckedCreateNestedManyWithoutProductInput
    orderItem?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUpdateManyWithoutProductNestedInput
    productimage?: productimageUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUncheckedUpdateManyWithoutProductNestedInput
    productimage?: productimageUncheckedUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productcategoryCreateInput = {
    category: categoryCreateNestedOneWithoutProductcategoryInput
    product: productCreateNestedOneWithoutProductcategoryInput
  }

  export type productcategoryUncheckedCreateInput = {
    productid: number
    categoryid: number
  }

  export type productcategoryUpdateInput = {
    category?: categoryUpdateOneRequiredWithoutProductcategoryNestedInput
    product?: productUpdateOneRequiredWithoutProductcategoryNestedInput
  }

  export type productcategoryUncheckedUpdateInput = {
    productid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type productcategoryCreateManyInput = {
    productid: number
    categoryid: number
  }

  export type productcategoryUpdateManyMutationInput = {

  }

  export type productcategoryUncheckedUpdateManyInput = {
    productid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type productimageCreateInput = {
    imageurl: string
    displayorder?: number | null
    product?: productCreateNestedOneWithoutProductimageInput
    productvariant?: productvariantCreateNestedManyWithoutImageInput
  }

  export type productimageUncheckedCreateInput = {
    id?: number
    imageurl: string
    displayorder?: number | null
    productid?: number | null
    productvariant?: productvariantUncheckedCreateNestedManyWithoutImageInput
  }

  export type productimageUpdateInput = {
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
    product?: productUpdateOneWithoutProductimageNestedInput
    productvariant?: productvariantUpdateManyWithoutImageNestedInput
  }

  export type productimageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
    productid?: NullableIntFieldUpdateOperationsInput | number | null
    productvariant?: productvariantUncheckedUpdateManyWithoutImageNestedInput
  }

  export type productimageCreateManyInput = {
    id?: number
    imageurl: string
    displayorder?: number | null
    productid?: number | null
  }

  export type productimageUpdateManyMutationInput = {
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productimageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
    productid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sizeCreateInput = {
    id: string
    name?: string | null
    description?: string
    index?: number
    productvariant?: productvariantCreateNestedManyWithoutSizeInput
  }

  export type sizeUncheckedCreateInput = {
    id: string
    name?: string | null
    description?: string
    index?: number
    productvariant?: productvariantUncheckedCreateNestedManyWithoutSizeInput
  }

  export type sizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    productvariant?: productvariantUpdateManyWithoutSizeNestedInput
  }

  export type sizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    productvariant?: productvariantUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type sizeCreateManyInput = {
    id: string
    name?: string | null
    description?: string
    index?: number
  }

  export type sizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type sizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type colorCreateInput = {
    id: string
    name: string
    code: string
    productvariant?: productvariantCreateNestedManyWithoutColorInput
  }

  export type colorUncheckedCreateInput = {
    id: string
    name: string
    code: string
    productvariant?: productvariantUncheckedCreateNestedManyWithoutColorInput
  }

  export type colorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    productvariant?: productvariantUpdateManyWithoutColorNestedInput
  }

  export type colorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    productvariant?: productvariantUncheckedUpdateManyWithoutColorNestedInput
  }

  export type colorCreateManyInput = {
    id: string
    name: string
    code: string
  }

  export type colorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type colorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type productvariantCreateInput = {
    additionalprice?: number | null
    stockquantity: number
    sku: string
    product: productCreateNestedOneWithoutProductvariantInput
    image?: productimageCreateNestedOneWithoutProductvariantInput
    color: colorCreateNestedOneWithoutProductvariantInput
    size: sizeCreateNestedOneWithoutProductvariantInput
    orderItem?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type productvariantUncheckedCreateInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    sizeid: string
    imageid?: number | null
    orderItem?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type productvariantUpdateInput = {
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutProductvariantNestedInput
    image?: productimageUpdateOneWithoutProductvariantNestedInput
    color?: colorUpdateOneRequiredWithoutProductvariantNestedInput
    size?: sizeUpdateOneRequiredWithoutProductvariantNestedInput
    orderItem?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    colorid?: StringFieldUpdateOperationsInput | string
    sizeid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
    orderItem?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type productvariantCreateManyInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    sizeid: string
    imageid?: number | null
  }

  export type productvariantUpdateManyMutationInput = {
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
  }

  export type productvariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    colorid?: StringFieldUpdateOperationsInput | string
    sizeid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userCreateInput = {
    userId?: string
    username?: string
    displayname?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    userId?: string
    username?: string
    displayname?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    userId?: string
    username?: string
    displayname?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleCreateInput = {
    roleId: string
    name: string
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    roleId: string
    name: string
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userRoles?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userRoles?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    roleId: string
    name: string
  }

  export type roleUpdateManyMutationInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateInput = {
    user: userCreateNestedOneWithoutUserRolesInput
    role: roleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateInput = {
    user?: userUpdateOneRequiredWithoutUserRolesNestedInput
    role?: roleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type orderCreateInput = {
    id?: string
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutOrdersInput
    items?: orderItemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: string
    userId?: string | null
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: orderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutOrdersNestedInput
    items?: orderItemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: string
    userId?: string | null
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemCreateInput = {
    id?: string
    quantity: number
    price: number
    order: orderCreateNestedOneWithoutItemsInput
    product: productCreateNestedOneWithoutOrderItemInput
    variant?: productvariantCreateNestedOneWithoutOrderItemInput
  }

  export type orderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: number
    variantId?: number | null
    quantity: number
    price: number
  }

  export type orderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutItemsNestedInput
    product?: productUpdateOneRequiredWithoutOrderItemNestedInput
    variant?: productvariantUpdateOneWithoutOrderItemNestedInput
  }

  export type orderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: number
    variantId?: number | null
    quantity: number
    price: number
  }

  export type orderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: categoryWhereInput
    some?: categoryWhereInput
    none?: categoryWhereInput
  }

  export type ProductcategoryListRelationFilter = {
    every?: productcategoryWhereInput
    some?: productcategoryWhereInput
    none?: productcategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categorystatus?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    parentcategoryid?: SortOrder
    isshow?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categorystatus?: SortOrder
    parentcategoryid?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categorystatus?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    parentcategoryid?: SortOrder
    isshow?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categorystatus?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    parentcategoryid?: SortOrder
    isshow?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
    categorystatus?: SortOrder
    parentcategoryid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductimageListRelationFilter = {
    every?: productimageWhereInput
    some?: productimageWhereInput
    none?: productimageWhereInput
  }

  export type ProductvariantListRelationFilter = {
    every?: productvariantWhereInput
    some?: productvariantWhereInput
    none?: productvariantWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: orderItemWhereInput
    some?: orderItemWhereInput
    none?: orderItemWhereInput
  }

  export type productimageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productvariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountprice?: SortOrder
    status?: SortOrder
    isfeatured?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discountprice?: SortOrder
    status?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountprice?: SortOrder
    status?: SortOrder
    isfeatured?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountprice?: SortOrder
    status?: SortOrder
    isfeatured?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discountprice?: SortOrder
    status?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type productcategoryProductidCategoryidCompoundUniqueInput = {
    productid: number
    categoryid: number
  }

  export type productcategoryCountOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type productcategoryAvgOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type productcategoryMaxOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type productcategoryMinOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type productcategorySumOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type ProductNullableScalarRelationFilter = {
    is?: productWhereInput | null
    isNot?: productWhereInput | null
  }

  export type productimageCountOrderByAggregateInput = {
    id?: SortOrder
    imageurl?: SortOrder
    displayorder?: SortOrder
    productid?: SortOrder
  }

  export type productimageAvgOrderByAggregateInput = {
    id?: SortOrder
    displayorder?: SortOrder
    productid?: SortOrder
  }

  export type productimageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageurl?: SortOrder
    displayorder?: SortOrder
    productid?: SortOrder
  }

  export type productimageMinOrderByAggregateInput = {
    id?: SortOrder
    imageurl?: SortOrder
    displayorder?: SortOrder
    productid?: SortOrder
  }

  export type productimageSumOrderByAggregateInput = {
    id?: SortOrder
    displayorder?: SortOrder
    productid?: SortOrder
  }

  export type sizeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    index?: SortOrder
  }

  export type sizeAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type sizeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    index?: SortOrder
  }

  export type sizeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    index?: SortOrder
  }

  export type sizeSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type colorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type colorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type colorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type ProductimageNullableScalarRelationFilter = {
    is?: productimageWhereInput | null
    isNot?: productimageWhereInput | null
  }

  export type ColorScalarRelationFilter = {
    is?: colorWhereInput
    isNot?: colorWhereInput
  }

  export type SizeScalarRelationFilter = {
    is?: sizeWhereInput
    isNot?: sizeWhereInput
  }

  export type productvariantCountOrderByAggregateInput = {
    id?: SortOrder
    additionalprice?: SortOrder
    stockquantity?: SortOrder
    sku?: SortOrder
    productid?: SortOrder
    colorid?: SortOrder
    sizeid?: SortOrder
    imageid?: SortOrder
  }

  export type productvariantAvgOrderByAggregateInput = {
    id?: SortOrder
    additionalprice?: SortOrder
    stockquantity?: SortOrder
    productid?: SortOrder
    imageid?: SortOrder
  }

  export type productvariantMaxOrderByAggregateInput = {
    id?: SortOrder
    additionalprice?: SortOrder
    stockquantity?: SortOrder
    sku?: SortOrder
    productid?: SortOrder
    colorid?: SortOrder
    sizeid?: SortOrder
    imageid?: SortOrder
  }

  export type productvariantMinOrderByAggregateInput = {
    id?: SortOrder
    additionalprice?: SortOrder
    stockquantity?: SortOrder
    sku?: SortOrder
    productid?: SortOrder
    colorid?: SortOrder
    sizeid?: SortOrder
    imageid?: SortOrder
  }

  export type productvariantSumOrderByAggregateInput = {
    id?: SortOrder
    additionalprice?: SortOrder
    stockquantity?: SortOrder
    productid?: SortOrder
    imageid?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type roleCountOrderByAggregateInput = {
    roleId?: SortOrder
    name?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    name?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    roleId?: SortOrder
    name?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    shippingFee?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    shippingFee?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    shippingFee?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    shippingFee?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    recipientName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    shippingFee?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type ProductvariantNullableScalarRelationFilter = {
    is?: productvariantWhereInput | null
    isNot?: productvariantWhereInput | null
  }

  export type orderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemAvgOrderByAggregateInput = {
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderItemSumOrderByAggregateInput = {
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type categoryCreateNestedOneWithoutChildcategoryInput = {
    create?: XOR<categoryCreateWithoutChildcategoryInput, categoryUncheckedCreateWithoutChildcategoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutChildcategoryInput
    connect?: categoryWhereUniqueInput
  }

  export type categoryCreateNestedManyWithoutParentcategoryInput = {
    create?: XOR<categoryCreateWithoutParentcategoryInput, categoryUncheckedCreateWithoutParentcategoryInput> | categoryCreateWithoutParentcategoryInput[] | categoryUncheckedCreateWithoutParentcategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentcategoryInput | categoryCreateOrConnectWithoutParentcategoryInput[]
    createMany?: categoryCreateManyParentcategoryInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type productcategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productcategoryCreateWithoutCategoryInput, productcategoryUncheckedCreateWithoutCategoryInput> | productcategoryCreateWithoutCategoryInput[] | productcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutCategoryInput | productcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: productcategoryCreateManyCategoryInputEnvelope
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
  }

  export type categoryUncheckedCreateNestedManyWithoutParentcategoryInput = {
    create?: XOR<categoryCreateWithoutParentcategoryInput, categoryUncheckedCreateWithoutParentcategoryInput> | categoryCreateWithoutParentcategoryInput[] | categoryUncheckedCreateWithoutParentcategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentcategoryInput | categoryCreateOrConnectWithoutParentcategoryInput[]
    createMany?: categoryCreateManyParentcategoryInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type productcategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productcategoryCreateWithoutCategoryInput, productcategoryUncheckedCreateWithoutCategoryInput> | productcategoryCreateWithoutCategoryInput[] | productcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutCategoryInput | productcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: productcategoryCreateManyCategoryInputEnvelope
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type categoryUpdateOneWithoutChildcategoryNestedInput = {
    create?: XOR<categoryCreateWithoutChildcategoryInput, categoryUncheckedCreateWithoutChildcategoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutChildcategoryInput
    upsert?: categoryUpsertWithoutChildcategoryInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutChildcategoryInput, categoryUpdateWithoutChildcategoryInput>, categoryUncheckedUpdateWithoutChildcategoryInput>
  }

  export type categoryUpdateManyWithoutParentcategoryNestedInput = {
    create?: XOR<categoryCreateWithoutParentcategoryInput, categoryUncheckedCreateWithoutParentcategoryInput> | categoryCreateWithoutParentcategoryInput[] | categoryUncheckedCreateWithoutParentcategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentcategoryInput | categoryCreateOrConnectWithoutParentcategoryInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutParentcategoryInput | categoryUpsertWithWhereUniqueWithoutParentcategoryInput[]
    createMany?: categoryCreateManyParentcategoryInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutParentcategoryInput | categoryUpdateWithWhereUniqueWithoutParentcategoryInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutParentcategoryInput | categoryUpdateManyWithWhereWithoutParentcategoryInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type productcategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productcategoryCreateWithoutCategoryInput, productcategoryUncheckedCreateWithoutCategoryInput> | productcategoryCreateWithoutCategoryInput[] | productcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutCategoryInput | productcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: productcategoryUpsertWithWhereUniqueWithoutCategoryInput | productcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productcategoryCreateManyCategoryInputEnvelope
    set?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    disconnect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    delete?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    update?: productcategoryUpdateWithWhereUniqueWithoutCategoryInput | productcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productcategoryUpdateManyWithWhereWithoutCategoryInput | productcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productcategoryScalarWhereInput | productcategoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoryUncheckedUpdateManyWithoutParentcategoryNestedInput = {
    create?: XOR<categoryCreateWithoutParentcategoryInput, categoryUncheckedCreateWithoutParentcategoryInput> | categoryCreateWithoutParentcategoryInput[] | categoryUncheckedCreateWithoutParentcategoryInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentcategoryInput | categoryCreateOrConnectWithoutParentcategoryInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutParentcategoryInput | categoryUpsertWithWhereUniqueWithoutParentcategoryInput[]
    createMany?: categoryCreateManyParentcategoryInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutParentcategoryInput | categoryUpdateWithWhereUniqueWithoutParentcategoryInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutParentcategoryInput | categoryUpdateManyWithWhereWithoutParentcategoryInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type productcategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productcategoryCreateWithoutCategoryInput, productcategoryUncheckedCreateWithoutCategoryInput> | productcategoryCreateWithoutCategoryInput[] | productcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutCategoryInput | productcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: productcategoryUpsertWithWhereUniqueWithoutCategoryInput | productcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productcategoryCreateManyCategoryInputEnvelope
    set?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    disconnect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    delete?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    update?: productcategoryUpdateWithWhereUniqueWithoutCategoryInput | productcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productcategoryUpdateManyWithWhereWithoutCategoryInput | productcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productcategoryScalarWhereInput | productcategoryScalarWhereInput[]
  }

  export type productcategoryCreateNestedManyWithoutProductInput = {
    create?: XOR<productcategoryCreateWithoutProductInput, productcategoryUncheckedCreateWithoutProductInput> | productcategoryCreateWithoutProductInput[] | productcategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutProductInput | productcategoryCreateOrConnectWithoutProductInput[]
    createMany?: productcategoryCreateManyProductInputEnvelope
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
  }

  export type productimageCreateNestedManyWithoutProductInput = {
    create?: XOR<productimageCreateWithoutProductInput, productimageUncheckedCreateWithoutProductInput> | productimageCreateWithoutProductInput[] | productimageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productimageCreateOrConnectWithoutProductInput | productimageCreateOrConnectWithoutProductInput[]
    createMany?: productimageCreateManyProductInputEnvelope
    connect?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
  }

  export type productvariantCreateNestedManyWithoutProductInput = {
    create?: XOR<productvariantCreateWithoutProductInput, productvariantUncheckedCreateWithoutProductInput> | productvariantCreateWithoutProductInput[] | productvariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutProductInput | productvariantCreateOrConnectWithoutProductInput[]
    createMany?: productvariantCreateManyProductInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type orderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type productcategoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<productcategoryCreateWithoutProductInput, productcategoryUncheckedCreateWithoutProductInput> | productcategoryCreateWithoutProductInput[] | productcategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutProductInput | productcategoryCreateOrConnectWithoutProductInput[]
    createMany?: productcategoryCreateManyProductInputEnvelope
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
  }

  export type productimageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<productimageCreateWithoutProductInput, productimageUncheckedCreateWithoutProductInput> | productimageCreateWithoutProductInput[] | productimageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productimageCreateOrConnectWithoutProductInput | productimageCreateOrConnectWithoutProductInput[]
    createMany?: productimageCreateManyProductInputEnvelope
    connect?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
  }

  export type productvariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<productvariantCreateWithoutProductInput, productvariantUncheckedCreateWithoutProductInput> | productvariantCreateWithoutProductInput[] | productvariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutProductInput | productvariantCreateOrConnectWithoutProductInput[]
    createMany?: productvariantCreateManyProductInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type orderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type productcategoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<productcategoryCreateWithoutProductInput, productcategoryUncheckedCreateWithoutProductInput> | productcategoryCreateWithoutProductInput[] | productcategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutProductInput | productcategoryCreateOrConnectWithoutProductInput[]
    upsert?: productcategoryUpsertWithWhereUniqueWithoutProductInput | productcategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productcategoryCreateManyProductInputEnvelope
    set?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    disconnect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    delete?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    update?: productcategoryUpdateWithWhereUniqueWithoutProductInput | productcategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productcategoryUpdateManyWithWhereWithoutProductInput | productcategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productcategoryScalarWhereInput | productcategoryScalarWhereInput[]
  }

  export type productimageUpdateManyWithoutProductNestedInput = {
    create?: XOR<productimageCreateWithoutProductInput, productimageUncheckedCreateWithoutProductInput> | productimageCreateWithoutProductInput[] | productimageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productimageCreateOrConnectWithoutProductInput | productimageCreateOrConnectWithoutProductInput[]
    upsert?: productimageUpsertWithWhereUniqueWithoutProductInput | productimageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productimageCreateManyProductInputEnvelope
    set?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    disconnect?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    delete?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    connect?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    update?: productimageUpdateWithWhereUniqueWithoutProductInput | productimageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productimageUpdateManyWithWhereWithoutProductInput | productimageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productimageScalarWhereInput | productimageScalarWhereInput[]
  }

  export type productvariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<productvariantCreateWithoutProductInput, productvariantUncheckedCreateWithoutProductInput> | productvariantCreateWithoutProductInput[] | productvariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutProductInput | productvariantCreateOrConnectWithoutProductInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutProductInput | productvariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productvariantCreateManyProductInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutProductInput | productvariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutProductInput | productvariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type orderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutProductInput | orderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutProductInput | orderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutProductInput | orderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type productcategoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<productcategoryCreateWithoutProductInput, productcategoryUncheckedCreateWithoutProductInput> | productcategoryCreateWithoutProductInput[] | productcategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productcategoryCreateOrConnectWithoutProductInput | productcategoryCreateOrConnectWithoutProductInput[]
    upsert?: productcategoryUpsertWithWhereUniqueWithoutProductInput | productcategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productcategoryCreateManyProductInputEnvelope
    set?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    disconnect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    delete?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    connect?: productcategoryWhereUniqueInput | productcategoryWhereUniqueInput[]
    update?: productcategoryUpdateWithWhereUniqueWithoutProductInput | productcategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productcategoryUpdateManyWithWhereWithoutProductInput | productcategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productcategoryScalarWhereInput | productcategoryScalarWhereInput[]
  }

  export type productimageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<productimageCreateWithoutProductInput, productimageUncheckedCreateWithoutProductInput> | productimageCreateWithoutProductInput[] | productimageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productimageCreateOrConnectWithoutProductInput | productimageCreateOrConnectWithoutProductInput[]
    upsert?: productimageUpsertWithWhereUniqueWithoutProductInput | productimageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productimageCreateManyProductInputEnvelope
    set?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    disconnect?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    delete?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    connect?: productimageWhereUniqueInput | productimageWhereUniqueInput[]
    update?: productimageUpdateWithWhereUniqueWithoutProductInput | productimageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productimageUpdateManyWithWhereWithoutProductInput | productimageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productimageScalarWhereInput | productimageScalarWhereInput[]
  }

  export type productvariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<productvariantCreateWithoutProductInput, productvariantUncheckedCreateWithoutProductInput> | productvariantCreateWithoutProductInput[] | productvariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutProductInput | productvariantCreateOrConnectWithoutProductInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutProductInput | productvariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productvariantCreateManyProductInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutProductInput | productvariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutProductInput | productvariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type orderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutProductInput | orderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutProductInput | orderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutProductInput | orderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutProductcategoryInput = {
    create?: XOR<categoryCreateWithoutProductcategoryInput, categoryUncheckedCreateWithoutProductcategoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductcategoryInput
    connect?: categoryWhereUniqueInput
  }

  export type productCreateNestedOneWithoutProductcategoryInput = {
    create?: XOR<productCreateWithoutProductcategoryInput, productUncheckedCreateWithoutProductcategoryInput>
    connectOrCreate?: productCreateOrConnectWithoutProductcategoryInput
    connect?: productWhereUniqueInput
  }

  export type categoryUpdateOneRequiredWithoutProductcategoryNestedInput = {
    create?: XOR<categoryCreateWithoutProductcategoryInput, categoryUncheckedCreateWithoutProductcategoryInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductcategoryInput
    upsert?: categoryUpsertWithoutProductcategoryInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProductcategoryInput, categoryUpdateWithoutProductcategoryInput>, categoryUncheckedUpdateWithoutProductcategoryInput>
  }

  export type productUpdateOneRequiredWithoutProductcategoryNestedInput = {
    create?: XOR<productCreateWithoutProductcategoryInput, productUncheckedCreateWithoutProductcategoryInput>
    connectOrCreate?: productCreateOrConnectWithoutProductcategoryInput
    upsert?: productUpsertWithoutProductcategoryInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProductcategoryInput, productUpdateWithoutProductcategoryInput>, productUncheckedUpdateWithoutProductcategoryInput>
  }

  export type productCreateNestedOneWithoutProductimageInput = {
    create?: XOR<productCreateWithoutProductimageInput, productUncheckedCreateWithoutProductimageInput>
    connectOrCreate?: productCreateOrConnectWithoutProductimageInput
    connect?: productWhereUniqueInput
  }

  export type productvariantCreateNestedManyWithoutImageInput = {
    create?: XOR<productvariantCreateWithoutImageInput, productvariantUncheckedCreateWithoutImageInput> | productvariantCreateWithoutImageInput[] | productvariantUncheckedCreateWithoutImageInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutImageInput | productvariantCreateOrConnectWithoutImageInput[]
    createMany?: productvariantCreateManyImageInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type productvariantUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<productvariantCreateWithoutImageInput, productvariantUncheckedCreateWithoutImageInput> | productvariantCreateWithoutImageInput[] | productvariantUncheckedCreateWithoutImageInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutImageInput | productvariantCreateOrConnectWithoutImageInput[]
    createMany?: productvariantCreateManyImageInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type productUpdateOneWithoutProductimageNestedInput = {
    create?: XOR<productCreateWithoutProductimageInput, productUncheckedCreateWithoutProductimageInput>
    connectOrCreate?: productCreateOrConnectWithoutProductimageInput
    upsert?: productUpsertWithoutProductimageInput
    disconnect?: productWhereInput | boolean
    delete?: productWhereInput | boolean
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProductimageInput, productUpdateWithoutProductimageInput>, productUncheckedUpdateWithoutProductimageInput>
  }

  export type productvariantUpdateManyWithoutImageNestedInput = {
    create?: XOR<productvariantCreateWithoutImageInput, productvariantUncheckedCreateWithoutImageInput> | productvariantCreateWithoutImageInput[] | productvariantUncheckedCreateWithoutImageInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutImageInput | productvariantCreateOrConnectWithoutImageInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutImageInput | productvariantUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: productvariantCreateManyImageInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutImageInput | productvariantUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutImageInput | productvariantUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type productvariantUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<productvariantCreateWithoutImageInput, productvariantUncheckedCreateWithoutImageInput> | productvariantCreateWithoutImageInput[] | productvariantUncheckedCreateWithoutImageInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutImageInput | productvariantCreateOrConnectWithoutImageInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutImageInput | productvariantUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: productvariantCreateManyImageInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutImageInput | productvariantUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutImageInput | productvariantUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type productvariantCreateNestedManyWithoutSizeInput = {
    create?: XOR<productvariantCreateWithoutSizeInput, productvariantUncheckedCreateWithoutSizeInput> | productvariantCreateWithoutSizeInput[] | productvariantUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutSizeInput | productvariantCreateOrConnectWithoutSizeInput[]
    createMany?: productvariantCreateManySizeInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type productvariantUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<productvariantCreateWithoutSizeInput, productvariantUncheckedCreateWithoutSizeInput> | productvariantCreateWithoutSizeInput[] | productvariantUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutSizeInput | productvariantCreateOrConnectWithoutSizeInput[]
    createMany?: productvariantCreateManySizeInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type productvariantUpdateManyWithoutSizeNestedInput = {
    create?: XOR<productvariantCreateWithoutSizeInput, productvariantUncheckedCreateWithoutSizeInput> | productvariantCreateWithoutSizeInput[] | productvariantUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutSizeInput | productvariantCreateOrConnectWithoutSizeInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutSizeInput | productvariantUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: productvariantCreateManySizeInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutSizeInput | productvariantUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutSizeInput | productvariantUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type productvariantUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<productvariantCreateWithoutSizeInput, productvariantUncheckedCreateWithoutSizeInput> | productvariantCreateWithoutSizeInput[] | productvariantUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutSizeInput | productvariantCreateOrConnectWithoutSizeInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutSizeInput | productvariantUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: productvariantCreateManySizeInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutSizeInput | productvariantUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutSizeInput | productvariantUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type productvariantCreateNestedManyWithoutColorInput = {
    create?: XOR<productvariantCreateWithoutColorInput, productvariantUncheckedCreateWithoutColorInput> | productvariantCreateWithoutColorInput[] | productvariantUncheckedCreateWithoutColorInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutColorInput | productvariantCreateOrConnectWithoutColorInput[]
    createMany?: productvariantCreateManyColorInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type productvariantUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<productvariantCreateWithoutColorInput, productvariantUncheckedCreateWithoutColorInput> | productvariantCreateWithoutColorInput[] | productvariantUncheckedCreateWithoutColorInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutColorInput | productvariantCreateOrConnectWithoutColorInput[]
    createMany?: productvariantCreateManyColorInputEnvelope
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
  }

  export type productvariantUpdateManyWithoutColorNestedInput = {
    create?: XOR<productvariantCreateWithoutColorInput, productvariantUncheckedCreateWithoutColorInput> | productvariantCreateWithoutColorInput[] | productvariantUncheckedCreateWithoutColorInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutColorInput | productvariantCreateOrConnectWithoutColorInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutColorInput | productvariantUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: productvariantCreateManyColorInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutColorInput | productvariantUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutColorInput | productvariantUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type productvariantUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<productvariantCreateWithoutColorInput, productvariantUncheckedCreateWithoutColorInput> | productvariantCreateWithoutColorInput[] | productvariantUncheckedCreateWithoutColorInput[]
    connectOrCreate?: productvariantCreateOrConnectWithoutColorInput | productvariantCreateOrConnectWithoutColorInput[]
    upsert?: productvariantUpsertWithWhereUniqueWithoutColorInput | productvariantUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: productvariantCreateManyColorInputEnvelope
    set?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    disconnect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    delete?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    connect?: productvariantWhereUniqueInput | productvariantWhereUniqueInput[]
    update?: productvariantUpdateWithWhereUniqueWithoutColorInput | productvariantUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: productvariantUpdateManyWithWhereWithoutColorInput | productvariantUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutProductvariantInput = {
    create?: XOR<productCreateWithoutProductvariantInput, productUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: productCreateOrConnectWithoutProductvariantInput
    connect?: productWhereUniqueInput
  }

  export type productimageCreateNestedOneWithoutProductvariantInput = {
    create?: XOR<productimageCreateWithoutProductvariantInput, productimageUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: productimageCreateOrConnectWithoutProductvariantInput
    connect?: productimageWhereUniqueInput
  }

  export type colorCreateNestedOneWithoutProductvariantInput = {
    create?: XOR<colorCreateWithoutProductvariantInput, colorUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: colorCreateOrConnectWithoutProductvariantInput
    connect?: colorWhereUniqueInput
  }

  export type sizeCreateNestedOneWithoutProductvariantInput = {
    create?: XOR<sizeCreateWithoutProductvariantInput, sizeUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: sizeCreateOrConnectWithoutProductvariantInput
    connect?: sizeWhereUniqueInput
  }

  export type orderItemCreateNestedManyWithoutVariantInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type orderItemUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type productUpdateOneRequiredWithoutProductvariantNestedInput = {
    create?: XOR<productCreateWithoutProductvariantInput, productUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: productCreateOrConnectWithoutProductvariantInput
    upsert?: productUpsertWithoutProductvariantInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProductvariantInput, productUpdateWithoutProductvariantInput>, productUncheckedUpdateWithoutProductvariantInput>
  }

  export type productimageUpdateOneWithoutProductvariantNestedInput = {
    create?: XOR<productimageCreateWithoutProductvariantInput, productimageUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: productimageCreateOrConnectWithoutProductvariantInput
    upsert?: productimageUpsertWithoutProductvariantInput
    disconnect?: productimageWhereInput | boolean
    delete?: productimageWhereInput | boolean
    connect?: productimageWhereUniqueInput
    update?: XOR<XOR<productimageUpdateToOneWithWhereWithoutProductvariantInput, productimageUpdateWithoutProductvariantInput>, productimageUncheckedUpdateWithoutProductvariantInput>
  }

  export type colorUpdateOneRequiredWithoutProductvariantNestedInput = {
    create?: XOR<colorCreateWithoutProductvariantInput, colorUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: colorCreateOrConnectWithoutProductvariantInput
    upsert?: colorUpsertWithoutProductvariantInput
    connect?: colorWhereUniqueInput
    update?: XOR<XOR<colorUpdateToOneWithWhereWithoutProductvariantInput, colorUpdateWithoutProductvariantInput>, colorUncheckedUpdateWithoutProductvariantInput>
  }

  export type sizeUpdateOneRequiredWithoutProductvariantNestedInput = {
    create?: XOR<sizeCreateWithoutProductvariantInput, sizeUncheckedCreateWithoutProductvariantInput>
    connectOrCreate?: sizeCreateOrConnectWithoutProductvariantInput
    upsert?: sizeUpsertWithoutProductvariantInput
    connect?: sizeWhereUniqueInput
    update?: XOR<XOR<sizeUpdateToOneWithWhereWithoutProductvariantInput, sizeUpdateWithoutProductvariantInput>, sizeUncheckedUpdateWithoutProductvariantInput>
  }

  export type orderItemUpdateManyWithoutVariantNestedInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutVariantInput | orderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutVariantInput | orderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutVariantInput | orderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type orderItemUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutVariantInput | orderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutVariantInput | orderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutVariantInput | orderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserRolesInput
    connect?: userWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserRolesInput
    connect?: roleWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserRolesInput
    upsert?: userUpsertWithoutUserRolesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserRolesInput, userUpdateWithoutUserRolesInput>, userUncheckedUpdateWithoutUserRolesInput>
  }

  export type roleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserRolesInput
    upsert?: roleUpsertWithoutUserRolesInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUserRolesInput, roleUpdateWithoutUserRolesInput>, roleUncheckedUpdateWithoutUserRolesInput>
  }

  export type userCreateNestedOneWithoutOrdersInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    connect?: userWhereUniqueInput
  }

  export type orderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type orderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type userUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    upsert?: userUpsertWithoutOrdersInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrdersInput, userUpdateWithoutOrdersInput>, userUncheckedUpdateWithoutOrdersInput>
  }

  export type orderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutOrderInput | orderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutOrderInput | orderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutOrderInput | orderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type orderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutOrderInput | orderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutOrderInput | orderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutOrderInput | orderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type orderCreateNestedOneWithoutItemsInput = {
    create?: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutItemsInput
    connect?: orderWhereUniqueInput
  }

  export type productCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<productCreateWithoutOrderItemInput, productUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderItemInput
    connect?: productWhereUniqueInput
  }

  export type productvariantCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<productvariantCreateWithoutOrderItemInput, productvariantUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: productvariantCreateOrConnectWithoutOrderItemInput
    connect?: productvariantWhereUniqueInput
  }

  export type orderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutItemsInput
    upsert?: orderUpsertWithoutItemsInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutItemsInput, orderUpdateWithoutItemsInput>, orderUncheckedUpdateWithoutItemsInput>
  }

  export type productUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<productCreateWithoutOrderItemInput, productUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderItemInput
    upsert?: productUpsertWithoutOrderItemInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrderItemInput, productUpdateWithoutOrderItemInput>, productUncheckedUpdateWithoutOrderItemInput>
  }

  export type productvariantUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<productvariantCreateWithoutOrderItemInput, productvariantUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: productvariantCreateOrConnectWithoutOrderItemInput
    upsert?: productvariantUpsertWithoutOrderItemInput
    disconnect?: productvariantWhereInput | boolean
    delete?: productvariantWhereInput | boolean
    connect?: productvariantWhereUniqueInput
    update?: XOR<XOR<productvariantUpdateToOneWithWhereWithoutOrderItemInput, productvariantUpdateWithoutOrderItemInput>, productvariantUncheckedUpdateWithoutOrderItemInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type categoryCreateWithoutChildcategoryInput = {
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    isshow?: boolean
    parentcategory?: categoryCreateNestedOneWithoutChildcategoryInput
    productcategory?: productcategoryCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutChildcategoryInput = {
    id?: number
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    parentcategoryid?: number | null
    isshow?: boolean
    productcategory?: productcategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutChildcategoryInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutChildcategoryInput, categoryUncheckedCreateWithoutChildcategoryInput>
  }

  export type categoryCreateWithoutParentcategoryInput = {
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    isshow?: boolean
    childcategory?: categoryCreateNestedManyWithoutParentcategoryInput
    productcategory?: productcategoryCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutParentcategoryInput = {
    id?: number
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    isshow?: boolean
    childcategory?: categoryUncheckedCreateNestedManyWithoutParentcategoryInput
    productcategory?: productcategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutParentcategoryInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutParentcategoryInput, categoryUncheckedCreateWithoutParentcategoryInput>
  }

  export type categoryCreateManyParentcategoryInputEnvelope = {
    data: categoryCreateManyParentcategoryInput | categoryCreateManyParentcategoryInput[]
    skipDuplicates?: boolean
  }

  export type productcategoryCreateWithoutCategoryInput = {
    product: productCreateNestedOneWithoutProductcategoryInput
  }

  export type productcategoryUncheckedCreateWithoutCategoryInput = {
    productid: number
  }

  export type productcategoryCreateOrConnectWithoutCategoryInput = {
    where: productcategoryWhereUniqueInput
    create: XOR<productcategoryCreateWithoutCategoryInput, productcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type productcategoryCreateManyCategoryInputEnvelope = {
    data: productcategoryCreateManyCategoryInput | productcategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutChildcategoryInput = {
    update: XOR<categoryUpdateWithoutChildcategoryInput, categoryUncheckedUpdateWithoutChildcategoryInput>
    create: XOR<categoryCreateWithoutChildcategoryInput, categoryUncheckedCreateWithoutChildcategoryInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutChildcategoryInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutChildcategoryInput, categoryUncheckedUpdateWithoutChildcategoryInput>
  }

  export type categoryUpdateWithoutChildcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    parentcategory?: categoryUpdateOneWithoutChildcategoryNestedInput
    productcategory?: productcategoryUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutChildcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentcategoryid?: NullableIntFieldUpdateOperationsInput | number | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUpsertWithWhereUniqueWithoutParentcategoryInput = {
    where: categoryWhereUniqueInput
    update: XOR<categoryUpdateWithoutParentcategoryInput, categoryUncheckedUpdateWithoutParentcategoryInput>
    create: XOR<categoryCreateWithoutParentcategoryInput, categoryUncheckedCreateWithoutParentcategoryInput>
  }

  export type categoryUpdateWithWhereUniqueWithoutParentcategoryInput = {
    where: categoryWhereUniqueInput
    data: XOR<categoryUpdateWithoutParentcategoryInput, categoryUncheckedUpdateWithoutParentcategoryInput>
  }

  export type categoryUpdateManyWithWhereWithoutParentcategoryInput = {
    where: categoryScalarWhereInput
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyWithoutParentcategoryInput>
  }

  export type categoryScalarWhereInput = {
    AND?: categoryScalarWhereInput | categoryScalarWhereInput[]
    OR?: categoryScalarWhereInput[]
    NOT?: categoryScalarWhereInput | categoryScalarWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    categorystatus?: IntFilter<"category"> | number
    image?: StringNullableFilter<"category"> | string | null
    slug?: StringNullableFilter<"category"> | string | null
    parentcategoryid?: IntNullableFilter<"category"> | number | null
    isshow?: BoolFilter<"category"> | boolean
  }

  export type productcategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productcategoryWhereUniqueInput
    update: XOR<productcategoryUpdateWithoutCategoryInput, productcategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<productcategoryCreateWithoutCategoryInput, productcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type productcategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productcategoryWhereUniqueInput
    data: XOR<productcategoryUpdateWithoutCategoryInput, productcategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type productcategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: productcategoryScalarWhereInput
    data: XOR<productcategoryUpdateManyMutationInput, productcategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productcategoryScalarWhereInput = {
    AND?: productcategoryScalarWhereInput | productcategoryScalarWhereInput[]
    OR?: productcategoryScalarWhereInput[]
    NOT?: productcategoryScalarWhereInput | productcategoryScalarWhereInput[]
    productid?: IntFilter<"productcategory"> | number
    categoryid?: IntFilter<"productcategory"> | number
  }

  export type productcategoryCreateWithoutProductInput = {
    category: categoryCreateNestedOneWithoutProductcategoryInput
  }

  export type productcategoryUncheckedCreateWithoutProductInput = {
    categoryid: number
  }

  export type productcategoryCreateOrConnectWithoutProductInput = {
    where: productcategoryWhereUniqueInput
    create: XOR<productcategoryCreateWithoutProductInput, productcategoryUncheckedCreateWithoutProductInput>
  }

  export type productcategoryCreateManyProductInputEnvelope = {
    data: productcategoryCreateManyProductInput | productcategoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type productimageCreateWithoutProductInput = {
    imageurl: string
    displayorder?: number | null
    productvariant?: productvariantCreateNestedManyWithoutImageInput
  }

  export type productimageUncheckedCreateWithoutProductInput = {
    id?: number
    imageurl: string
    displayorder?: number | null
    productvariant?: productvariantUncheckedCreateNestedManyWithoutImageInput
  }

  export type productimageCreateOrConnectWithoutProductInput = {
    where: productimageWhereUniqueInput
    create: XOR<productimageCreateWithoutProductInput, productimageUncheckedCreateWithoutProductInput>
  }

  export type productimageCreateManyProductInputEnvelope = {
    data: productimageCreateManyProductInput | productimageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type productvariantCreateWithoutProductInput = {
    additionalprice?: number | null
    stockquantity: number
    sku: string
    image?: productimageCreateNestedOneWithoutProductvariantInput
    color: colorCreateNestedOneWithoutProductvariantInput
    size: sizeCreateNestedOneWithoutProductvariantInput
    orderItem?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type productvariantUncheckedCreateWithoutProductInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    colorid: string
    sizeid: string
    imageid?: number | null
    orderItem?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type productvariantCreateOrConnectWithoutProductInput = {
    where: productvariantWhereUniqueInput
    create: XOR<productvariantCreateWithoutProductInput, productvariantUncheckedCreateWithoutProductInput>
  }

  export type productvariantCreateManyProductInputEnvelope = {
    data: productvariantCreateManyProductInput | productvariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type orderItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    price: number
    order: orderCreateNestedOneWithoutItemsInput
    variant?: productvariantCreateNestedOneWithoutOrderItemInput
  }

  export type orderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    variantId?: number | null
    quantity: number
    price: number
  }

  export type orderItemCreateOrConnectWithoutProductInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput>
  }

  export type orderItemCreateManyProductInputEnvelope = {
    data: orderItemCreateManyProductInput | orderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type productcategoryUpsertWithWhereUniqueWithoutProductInput = {
    where: productcategoryWhereUniqueInput
    update: XOR<productcategoryUpdateWithoutProductInput, productcategoryUncheckedUpdateWithoutProductInput>
    create: XOR<productcategoryCreateWithoutProductInput, productcategoryUncheckedCreateWithoutProductInput>
  }

  export type productcategoryUpdateWithWhereUniqueWithoutProductInput = {
    where: productcategoryWhereUniqueInput
    data: XOR<productcategoryUpdateWithoutProductInput, productcategoryUncheckedUpdateWithoutProductInput>
  }

  export type productcategoryUpdateManyWithWhereWithoutProductInput = {
    where: productcategoryScalarWhereInput
    data: XOR<productcategoryUpdateManyMutationInput, productcategoryUncheckedUpdateManyWithoutProductInput>
  }

  export type productimageUpsertWithWhereUniqueWithoutProductInput = {
    where: productimageWhereUniqueInput
    update: XOR<productimageUpdateWithoutProductInput, productimageUncheckedUpdateWithoutProductInput>
    create: XOR<productimageCreateWithoutProductInput, productimageUncheckedCreateWithoutProductInput>
  }

  export type productimageUpdateWithWhereUniqueWithoutProductInput = {
    where: productimageWhereUniqueInput
    data: XOR<productimageUpdateWithoutProductInput, productimageUncheckedUpdateWithoutProductInput>
  }

  export type productimageUpdateManyWithWhereWithoutProductInput = {
    where: productimageScalarWhereInput
    data: XOR<productimageUpdateManyMutationInput, productimageUncheckedUpdateManyWithoutProductInput>
  }

  export type productimageScalarWhereInput = {
    AND?: productimageScalarWhereInput | productimageScalarWhereInput[]
    OR?: productimageScalarWhereInput[]
    NOT?: productimageScalarWhereInput | productimageScalarWhereInput[]
    id?: IntFilter<"productimage"> | number
    imageurl?: StringFilter<"productimage"> | string
    displayorder?: IntNullableFilter<"productimage"> | number | null
    productid?: IntNullableFilter<"productimage"> | number | null
  }

  export type productvariantUpsertWithWhereUniqueWithoutProductInput = {
    where: productvariantWhereUniqueInput
    update: XOR<productvariantUpdateWithoutProductInput, productvariantUncheckedUpdateWithoutProductInput>
    create: XOR<productvariantCreateWithoutProductInput, productvariantUncheckedCreateWithoutProductInput>
  }

  export type productvariantUpdateWithWhereUniqueWithoutProductInput = {
    where: productvariantWhereUniqueInput
    data: XOR<productvariantUpdateWithoutProductInput, productvariantUncheckedUpdateWithoutProductInput>
  }

  export type productvariantUpdateManyWithWhereWithoutProductInput = {
    where: productvariantScalarWhereInput
    data: XOR<productvariantUpdateManyMutationInput, productvariantUncheckedUpdateManyWithoutProductInput>
  }

  export type productvariantScalarWhereInput = {
    AND?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
    OR?: productvariantScalarWhereInput[]
    NOT?: productvariantScalarWhereInput | productvariantScalarWhereInput[]
    id?: IntFilter<"productvariant"> | number
    additionalprice?: IntNullableFilter<"productvariant"> | number | null
    stockquantity?: IntFilter<"productvariant"> | number
    sku?: StringFilter<"productvariant"> | string
    productid?: IntFilter<"productvariant"> | number
    colorid?: StringFilter<"productvariant"> | string
    sizeid?: StringFilter<"productvariant"> | string
    imageid?: IntNullableFilter<"productvariant"> | number | null
  }

  export type orderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutProductInput, orderItemUncheckedUpdateWithoutProductInput>
    create: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutProductInput, orderItemUncheckedUpdateWithoutProductInput>
  }

  export type orderItemUpdateManyWithWhereWithoutProductInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type orderItemScalarWhereInput = {
    AND?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
    OR?: orderItemScalarWhereInput[]
    NOT?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
    id?: StringFilter<"orderItem"> | string
    orderId?: StringFilter<"orderItem"> | string
    productId?: IntFilter<"orderItem"> | number
    variantId?: IntNullableFilter<"orderItem"> | number | null
    quantity?: IntFilter<"orderItem"> | number
    price?: IntFilter<"orderItem"> | number
  }

  export type categoryCreateWithoutProductcategoryInput = {
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    isshow?: boolean
    parentcategory?: categoryCreateNestedOneWithoutChildcategoryInput
    childcategory?: categoryCreateNestedManyWithoutParentcategoryInput
  }

  export type categoryUncheckedCreateWithoutProductcategoryInput = {
    id?: number
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    parentcategoryid?: number | null
    isshow?: boolean
    childcategory?: categoryUncheckedCreateNestedManyWithoutParentcategoryInput
  }

  export type categoryCreateOrConnectWithoutProductcategoryInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductcategoryInput, categoryUncheckedCreateWithoutProductcategoryInput>
  }

  export type productCreateWithoutProductcategoryInput = {
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productimage?: productimageCreateNestedManyWithoutProductInput
    productvariant?: productvariantCreateNestedManyWithoutProductInput
    orderItem?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProductcategoryInput = {
    id?: number
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productimage?: productimageUncheckedCreateNestedManyWithoutProductInput
    productvariant?: productvariantUncheckedCreateNestedManyWithoutProductInput
    orderItem?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProductcategoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProductcategoryInput, productUncheckedCreateWithoutProductcategoryInput>
  }

  export type categoryUpsertWithoutProductcategoryInput = {
    update: XOR<categoryUpdateWithoutProductcategoryInput, categoryUncheckedUpdateWithoutProductcategoryInput>
    create: XOR<categoryCreateWithoutProductcategoryInput, categoryUncheckedCreateWithoutProductcategoryInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProductcategoryInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProductcategoryInput, categoryUncheckedUpdateWithoutProductcategoryInput>
  }

  export type categoryUpdateWithoutProductcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    parentcategory?: categoryUpdateOneWithoutChildcategoryNestedInput
    childcategory?: categoryUpdateManyWithoutParentcategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutProductcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentcategoryid?: NullableIntFieldUpdateOperationsInput | number | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    childcategory?: categoryUncheckedUpdateManyWithoutParentcategoryNestedInput
  }

  export type productUpsertWithoutProductcategoryInput = {
    update: XOR<productUpdateWithoutProductcategoryInput, productUncheckedUpdateWithoutProductcategoryInput>
    create: XOR<productCreateWithoutProductcategoryInput, productUncheckedCreateWithoutProductcategoryInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProductcategoryInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProductcategoryInput, productUncheckedUpdateWithoutProductcategoryInput>
  }

  export type productUpdateWithoutProductcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productimage?: productimageUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProductcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productimage?: productimageUncheckedUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutProductimageInput = {
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryCreateNestedManyWithoutProductInput
    productvariant?: productvariantCreateNestedManyWithoutProductInput
    orderItem?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProductimageInput = {
    id?: number
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryUncheckedCreateNestedManyWithoutProductInput
    productvariant?: productvariantUncheckedCreateNestedManyWithoutProductInput
    orderItem?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProductimageInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProductimageInput, productUncheckedCreateWithoutProductimageInput>
  }

  export type productvariantCreateWithoutImageInput = {
    additionalprice?: number | null
    stockquantity: number
    sku: string
    product: productCreateNestedOneWithoutProductvariantInput
    color: colorCreateNestedOneWithoutProductvariantInput
    size: sizeCreateNestedOneWithoutProductvariantInput
    orderItem?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type productvariantUncheckedCreateWithoutImageInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    sizeid: string
    orderItem?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type productvariantCreateOrConnectWithoutImageInput = {
    where: productvariantWhereUniqueInput
    create: XOR<productvariantCreateWithoutImageInput, productvariantUncheckedCreateWithoutImageInput>
  }

  export type productvariantCreateManyImageInputEnvelope = {
    data: productvariantCreateManyImageInput | productvariantCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithoutProductimageInput = {
    update: XOR<productUpdateWithoutProductimageInput, productUncheckedUpdateWithoutProductimageInput>
    create: XOR<productCreateWithoutProductimageInput, productUncheckedCreateWithoutProductimageInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProductimageInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProductimageInput, productUncheckedUpdateWithoutProductimageInput>
  }

  export type productUpdateWithoutProductimageInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProductimageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUncheckedUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productvariantUpsertWithWhereUniqueWithoutImageInput = {
    where: productvariantWhereUniqueInput
    update: XOR<productvariantUpdateWithoutImageInput, productvariantUncheckedUpdateWithoutImageInput>
    create: XOR<productvariantCreateWithoutImageInput, productvariantUncheckedCreateWithoutImageInput>
  }

  export type productvariantUpdateWithWhereUniqueWithoutImageInput = {
    where: productvariantWhereUniqueInput
    data: XOR<productvariantUpdateWithoutImageInput, productvariantUncheckedUpdateWithoutImageInput>
  }

  export type productvariantUpdateManyWithWhereWithoutImageInput = {
    where: productvariantScalarWhereInput
    data: XOR<productvariantUpdateManyMutationInput, productvariantUncheckedUpdateManyWithoutImageInput>
  }

  export type productvariantCreateWithoutSizeInput = {
    additionalprice?: number | null
    stockquantity: number
    sku: string
    product: productCreateNestedOneWithoutProductvariantInput
    image?: productimageCreateNestedOneWithoutProductvariantInput
    color: colorCreateNestedOneWithoutProductvariantInput
    orderItem?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type productvariantUncheckedCreateWithoutSizeInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    imageid?: number | null
    orderItem?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type productvariantCreateOrConnectWithoutSizeInput = {
    where: productvariantWhereUniqueInput
    create: XOR<productvariantCreateWithoutSizeInput, productvariantUncheckedCreateWithoutSizeInput>
  }

  export type productvariantCreateManySizeInputEnvelope = {
    data: productvariantCreateManySizeInput | productvariantCreateManySizeInput[]
    skipDuplicates?: boolean
  }

  export type productvariantUpsertWithWhereUniqueWithoutSizeInput = {
    where: productvariantWhereUniqueInput
    update: XOR<productvariantUpdateWithoutSizeInput, productvariantUncheckedUpdateWithoutSizeInput>
    create: XOR<productvariantCreateWithoutSizeInput, productvariantUncheckedCreateWithoutSizeInput>
  }

  export type productvariantUpdateWithWhereUniqueWithoutSizeInput = {
    where: productvariantWhereUniqueInput
    data: XOR<productvariantUpdateWithoutSizeInput, productvariantUncheckedUpdateWithoutSizeInput>
  }

  export type productvariantUpdateManyWithWhereWithoutSizeInput = {
    where: productvariantScalarWhereInput
    data: XOR<productvariantUpdateManyMutationInput, productvariantUncheckedUpdateManyWithoutSizeInput>
  }

  export type productvariantCreateWithoutColorInput = {
    additionalprice?: number | null
    stockquantity: number
    sku: string
    product: productCreateNestedOneWithoutProductvariantInput
    image?: productimageCreateNestedOneWithoutProductvariantInput
    size: sizeCreateNestedOneWithoutProductvariantInput
    orderItem?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type productvariantUncheckedCreateWithoutColorInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    sizeid: string
    imageid?: number | null
    orderItem?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type productvariantCreateOrConnectWithoutColorInput = {
    where: productvariantWhereUniqueInput
    create: XOR<productvariantCreateWithoutColorInput, productvariantUncheckedCreateWithoutColorInput>
  }

  export type productvariantCreateManyColorInputEnvelope = {
    data: productvariantCreateManyColorInput | productvariantCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type productvariantUpsertWithWhereUniqueWithoutColorInput = {
    where: productvariantWhereUniqueInput
    update: XOR<productvariantUpdateWithoutColorInput, productvariantUncheckedUpdateWithoutColorInput>
    create: XOR<productvariantCreateWithoutColorInput, productvariantUncheckedCreateWithoutColorInput>
  }

  export type productvariantUpdateWithWhereUniqueWithoutColorInput = {
    where: productvariantWhereUniqueInput
    data: XOR<productvariantUpdateWithoutColorInput, productvariantUncheckedUpdateWithoutColorInput>
  }

  export type productvariantUpdateManyWithWhereWithoutColorInput = {
    where: productvariantScalarWhereInput
    data: XOR<productvariantUpdateManyMutationInput, productvariantUncheckedUpdateManyWithoutColorInput>
  }

  export type productCreateWithoutProductvariantInput = {
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryCreateNestedManyWithoutProductInput
    productimage?: productimageCreateNestedManyWithoutProductInput
    orderItem?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProductvariantInput = {
    id?: number
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryUncheckedCreateNestedManyWithoutProductInput
    productimage?: productimageUncheckedCreateNestedManyWithoutProductInput
    orderItem?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProductvariantInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProductvariantInput, productUncheckedCreateWithoutProductvariantInput>
  }

  export type productimageCreateWithoutProductvariantInput = {
    imageurl: string
    displayorder?: number | null
    product?: productCreateNestedOneWithoutProductimageInput
  }

  export type productimageUncheckedCreateWithoutProductvariantInput = {
    id?: number
    imageurl: string
    displayorder?: number | null
    productid?: number | null
  }

  export type productimageCreateOrConnectWithoutProductvariantInput = {
    where: productimageWhereUniqueInput
    create: XOR<productimageCreateWithoutProductvariantInput, productimageUncheckedCreateWithoutProductvariantInput>
  }

  export type colorCreateWithoutProductvariantInput = {
    id: string
    name: string
    code: string
  }

  export type colorUncheckedCreateWithoutProductvariantInput = {
    id: string
    name: string
    code: string
  }

  export type colorCreateOrConnectWithoutProductvariantInput = {
    where: colorWhereUniqueInput
    create: XOR<colorCreateWithoutProductvariantInput, colorUncheckedCreateWithoutProductvariantInput>
  }

  export type sizeCreateWithoutProductvariantInput = {
    id: string
    name?: string | null
    description?: string
    index?: number
  }

  export type sizeUncheckedCreateWithoutProductvariantInput = {
    id: string
    name?: string | null
    description?: string
    index?: number
  }

  export type sizeCreateOrConnectWithoutProductvariantInput = {
    where: sizeWhereUniqueInput
    create: XOR<sizeCreateWithoutProductvariantInput, sizeUncheckedCreateWithoutProductvariantInput>
  }

  export type orderItemCreateWithoutVariantInput = {
    id?: string
    quantity: number
    price: number
    order: orderCreateNestedOneWithoutItemsInput
    product: productCreateNestedOneWithoutOrderItemInput
  }

  export type orderItemUncheckedCreateWithoutVariantInput = {
    id?: string
    orderId: string
    productId: number
    quantity: number
    price: number
  }

  export type orderItemCreateOrConnectWithoutVariantInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput>
  }

  export type orderItemCreateManyVariantInputEnvelope = {
    data: orderItemCreateManyVariantInput | orderItemCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithoutProductvariantInput = {
    update: XOR<productUpdateWithoutProductvariantInput, productUncheckedUpdateWithoutProductvariantInput>
    create: XOR<productCreateWithoutProductvariantInput, productUncheckedCreateWithoutProductvariantInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProductvariantInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProductvariantInput, productUncheckedUpdateWithoutProductvariantInput>
  }

  export type productUpdateWithoutProductvariantInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUpdateManyWithoutProductNestedInput
    productimage?: productimageUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProductvariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUncheckedUpdateManyWithoutProductNestedInput
    productimage?: productimageUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productimageUpsertWithoutProductvariantInput = {
    update: XOR<productimageUpdateWithoutProductvariantInput, productimageUncheckedUpdateWithoutProductvariantInput>
    create: XOR<productimageCreateWithoutProductvariantInput, productimageUncheckedCreateWithoutProductvariantInput>
    where?: productimageWhereInput
  }

  export type productimageUpdateToOneWithWhereWithoutProductvariantInput = {
    where?: productimageWhereInput
    data: XOR<productimageUpdateWithoutProductvariantInput, productimageUncheckedUpdateWithoutProductvariantInput>
  }

  export type productimageUpdateWithoutProductvariantInput = {
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
    product?: productUpdateOneWithoutProductimageNestedInput
  }

  export type productimageUncheckedUpdateWithoutProductvariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
    productid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type colorUpsertWithoutProductvariantInput = {
    update: XOR<colorUpdateWithoutProductvariantInput, colorUncheckedUpdateWithoutProductvariantInput>
    create: XOR<colorCreateWithoutProductvariantInput, colorUncheckedCreateWithoutProductvariantInput>
    where?: colorWhereInput
  }

  export type colorUpdateToOneWithWhereWithoutProductvariantInput = {
    where?: colorWhereInput
    data: XOR<colorUpdateWithoutProductvariantInput, colorUncheckedUpdateWithoutProductvariantInput>
  }

  export type colorUpdateWithoutProductvariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type colorUncheckedUpdateWithoutProductvariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type sizeUpsertWithoutProductvariantInput = {
    update: XOR<sizeUpdateWithoutProductvariantInput, sizeUncheckedUpdateWithoutProductvariantInput>
    create: XOR<sizeCreateWithoutProductvariantInput, sizeUncheckedCreateWithoutProductvariantInput>
    where?: sizeWhereInput
  }

  export type sizeUpdateToOneWithWhereWithoutProductvariantInput = {
    where?: sizeWhereInput
    data: XOR<sizeUpdateWithoutProductvariantInput, sizeUncheckedUpdateWithoutProductvariantInput>
  }

  export type sizeUpdateWithoutProductvariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type sizeUncheckedUpdateWithoutProductvariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemUpsertWithWhereUniqueWithoutVariantInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutVariantInput, orderItemUncheckedUpdateWithoutVariantInput>
    create: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutVariantInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutVariantInput, orderItemUncheckedUpdateWithoutVariantInput>
  }

  export type orderItemUpdateManyWithWhereWithoutVariantInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutVariantInput>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: roleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutUserInput = {
    id?: string
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: orderItemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    id?: string
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: orderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    id?: StringFilter<"order"> | string
    userId?: StringNullableFilter<"order"> | string | null
    totalPrice?: IntFilter<"order"> | number
    shippingFee?: IntFilter<"order"> | number
    status?: IntFilter<"order"> | number
    paymentMethod?: StringFilter<"order"> | string
    paymentStatus?: IntFilter<"order"> | number
    recipientName?: StringFilter<"order"> | string
    phone?: StringFilter<"order"> | string
    address?: StringFilter<"order"> | string
    note?: StringNullableFilter<"order"> | string | null
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: userCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type userCreateWithoutUserRolesInput = {
    userId?: string
    username?: string
    displayname?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserRolesInput = {
    userId?: string
    username?: string
    displayname?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserRolesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
  }

  export type roleCreateWithoutUserRolesInput = {
    roleId: string
    name: string
  }

  export type roleUncheckedCreateWithoutUserRolesInput = {
    roleId: string
    name: string
  }

  export type roleCreateOrConnectWithoutUserRolesInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
  }

  export type userUpsertWithoutUserRolesInput = {
    update: XOR<userUpdateWithoutUserRolesInput, userUncheckedUpdateWithoutUserRolesInput>
    create: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserRolesInput, userUncheckedUpdateWithoutUserRolesInput>
  }

  export type userUpdateWithoutUserRolesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserRolesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type roleUpsertWithoutUserRolesInput = {
    update: XOR<roleUpdateWithoutUserRolesInput, roleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUserRolesInput, roleUncheckedUpdateWithoutUserRolesInput>
  }

  export type roleUpdateWithoutUserRolesInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateWithoutUserRolesInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateWithoutOrdersInput = {
    userId?: string
    username?: string
    displayname?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutOrdersInput = {
    userId?: string
    username?: string
    displayname?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutOrdersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
  }

  export type orderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    price: number
    product: productCreateNestedOneWithoutOrderItemInput
    variant?: productvariantCreateNestedOneWithoutOrderItemInput
  }

  export type orderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: number
    variantId?: number | null
    quantity: number
    price: number
  }

  export type orderItemCreateOrConnectWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput>
  }

  export type orderItemCreateManyOrderInputEnvelope = {
    data: orderItemCreateManyOrderInput | orderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutOrdersInput = {
    update: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrdersInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
  }

  export type userUpdateWithoutOrdersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutOrdersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type orderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutOrderInput, orderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutOrderInput, orderItemUncheckedUpdateWithoutOrderInput>
  }

  export type orderItemUpdateManyWithWhereWithoutOrderInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderCreateWithoutItemsInput = {
    id?: string
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutOrdersInput
  }

  export type orderUncheckedCreateWithoutItemsInput = {
    id?: string
    userId?: string | null
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderCreateOrConnectWithoutItemsInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
  }

  export type productCreateWithoutOrderItemInput = {
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryCreateNestedManyWithoutProductInput
    productimage?: productimageCreateNestedManyWithoutProductInput
    productvariant?: productvariantCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrderItemInput = {
    id?: number
    name: string
    slug: string
    description: string
    sku: string
    price: number
    discountprice?: number | null
    status: number
    isfeatured: boolean
    productcategory?: productcategoryUncheckedCreateNestedManyWithoutProductInput
    productimage?: productimageUncheckedCreateNestedManyWithoutProductInput
    productvariant?: productvariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrderItemInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrderItemInput, productUncheckedCreateWithoutOrderItemInput>
  }

  export type productvariantCreateWithoutOrderItemInput = {
    additionalprice?: number | null
    stockquantity: number
    sku: string
    product: productCreateNestedOneWithoutProductvariantInput
    image?: productimageCreateNestedOneWithoutProductvariantInput
    color: colorCreateNestedOneWithoutProductvariantInput
    size: sizeCreateNestedOneWithoutProductvariantInput
  }

  export type productvariantUncheckedCreateWithoutOrderItemInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    sizeid: string
    imageid?: number | null
  }

  export type productvariantCreateOrConnectWithoutOrderItemInput = {
    where: productvariantWhereUniqueInput
    create: XOR<productvariantCreateWithoutOrderItemInput, productvariantUncheckedCreateWithoutOrderItemInput>
  }

  export type orderUpsertWithoutItemsInput = {
    update: XOR<orderUpdateWithoutItemsInput, orderUncheckedUpdateWithoutItemsInput>
    create: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutItemsInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutItemsInput, orderUncheckedUpdateWithoutItemsInput>
  }

  export type orderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutOrdersNestedInput
  }

  export type orderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUpsertWithoutOrderItemInput = {
    update: XOR<productUpdateWithoutOrderItemInput, productUncheckedUpdateWithoutOrderItemInput>
    create: XOR<productCreateWithoutOrderItemInput, productUncheckedCreateWithoutOrderItemInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrderItemInput, productUncheckedUpdateWithoutOrderItemInput>
  }

  export type productUpdateWithoutOrderItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUpdateManyWithoutProductNestedInput
    productimage?: productimageUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountprice?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    isfeatured?: BoolFieldUpdateOperationsInput | boolean
    productcategory?: productcategoryUncheckedUpdateManyWithoutProductNestedInput
    productimage?: productimageUncheckedUpdateManyWithoutProductNestedInput
    productvariant?: productvariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productvariantUpsertWithoutOrderItemInput = {
    update: XOR<productvariantUpdateWithoutOrderItemInput, productvariantUncheckedUpdateWithoutOrderItemInput>
    create: XOR<productvariantCreateWithoutOrderItemInput, productvariantUncheckedCreateWithoutOrderItemInput>
    where?: productvariantWhereInput
  }

  export type productvariantUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: productvariantWhereInput
    data: XOR<productvariantUpdateWithoutOrderItemInput, productvariantUncheckedUpdateWithoutOrderItemInput>
  }

  export type productvariantUpdateWithoutOrderItemInput = {
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutProductvariantNestedInput
    image?: productimageUpdateOneWithoutProductvariantNestedInput
    color?: colorUpdateOneRequiredWithoutProductvariantNestedInput
    size?: sizeUpdateOneRequiredWithoutProductvariantNestedInput
  }

  export type productvariantUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    colorid?: StringFieldUpdateOperationsInput | string
    sizeid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoryCreateManyParentcategoryInput = {
    id?: number
    name: string
    description?: string | null
    categorystatus: number
    image?: string | null
    slug?: string | null
    isshow?: boolean
  }

  export type productcategoryCreateManyCategoryInput = {
    productid: number
  }

  export type categoryUpdateWithoutParentcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    childcategory?: categoryUpdateManyWithoutParentcategoryNestedInput
    productcategory?: productcategoryUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutParentcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
    childcategory?: categoryUncheckedUpdateManyWithoutParentcategoryNestedInput
    productcategory?: productcategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateManyWithoutParentcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorystatus?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    isshow?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productcategoryUpdateWithoutCategoryInput = {
    product?: productUpdateOneRequiredWithoutProductcategoryNestedInput
  }

  export type productcategoryUncheckedUpdateWithoutCategoryInput = {
    productid?: IntFieldUpdateOperationsInput | number
  }

  export type productcategoryUncheckedUpdateManyWithoutCategoryInput = {
    productid?: IntFieldUpdateOperationsInput | number
  }

  export type productcategoryCreateManyProductInput = {
    categoryid: number
  }

  export type productimageCreateManyProductInput = {
    id?: number
    imageurl: string
    displayorder?: number | null
  }

  export type productvariantCreateManyProductInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    colorid: string
    sizeid: string
    imageid?: number | null
  }

  export type orderItemCreateManyProductInput = {
    id?: string
    orderId: string
    variantId?: number | null
    quantity: number
    price: number
  }

  export type productcategoryUpdateWithoutProductInput = {
    category?: categoryUpdateOneRequiredWithoutProductcategoryNestedInput
  }

  export type productcategoryUncheckedUpdateWithoutProductInput = {
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type productcategoryUncheckedUpdateManyWithoutProductInput = {
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type productimageUpdateWithoutProductInput = {
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
    productvariant?: productvariantUpdateManyWithoutImageNestedInput
  }

  export type productimageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
    productvariant?: productvariantUncheckedUpdateManyWithoutImageNestedInput
  }

  export type productimageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageurl?: StringFieldUpdateOperationsInput | string
    displayorder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productvariantUpdateWithoutProductInput = {
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: productimageUpdateOneWithoutProductvariantNestedInput
    color?: colorUpdateOneRequiredWithoutProductvariantNestedInput
    size?: sizeUpdateOneRequiredWithoutProductvariantNestedInput
    orderItem?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    colorid?: StringFieldUpdateOperationsInput | string
    sizeid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
    orderItem?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    colorid?: StringFieldUpdateOperationsInput | string
    sizeid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutItemsNestedInput
    variant?: productvariantUpdateOneWithoutOrderItemNestedInput
  }

  export type orderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type productvariantCreateManyImageInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    sizeid: string
  }

  export type productvariantUpdateWithoutImageInput = {
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutProductvariantNestedInput
    color?: colorUpdateOneRequiredWithoutProductvariantNestedInput
    size?: sizeUpdateOneRequiredWithoutProductvariantNestedInput
    orderItem?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    colorid?: StringFieldUpdateOperationsInput | string
    sizeid?: StringFieldUpdateOperationsInput | string
    orderItem?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    colorid?: StringFieldUpdateOperationsInput | string
    sizeid?: StringFieldUpdateOperationsInput | string
  }

  export type productvariantCreateManySizeInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    colorid: string
    imageid?: number | null
  }

  export type productvariantUpdateWithoutSizeInput = {
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutProductvariantNestedInput
    image?: productimageUpdateOneWithoutProductvariantNestedInput
    color?: colorUpdateOneRequiredWithoutProductvariantNestedInput
    orderItem?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    colorid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
    orderItem?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateManyWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    colorid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productvariantCreateManyColorInput = {
    id?: number
    additionalprice?: number | null
    stockquantity: number
    sku: string
    productid: number
    sizeid: string
    imageid?: number | null
  }

  export type productvariantUpdateWithoutColorInput = {
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutProductvariantNestedInput
    image?: productimageUpdateOneWithoutProductvariantNestedInput
    size?: sizeUpdateOneRequiredWithoutProductvariantNestedInput
    orderItem?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    sizeid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
    orderItem?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type productvariantUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    additionalprice?: NullableIntFieldUpdateOperationsInput | number | null
    stockquantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    sizeid?: StringFieldUpdateOperationsInput | string
    imageid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderItemCreateManyVariantInput = {
    id?: string
    orderId: string
    productId: number
    quantity: number
    price: number
  }

  export type orderItemUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutItemsNestedInput
    product?: productUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type orderItemUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
  }

  export type orderCreateManyUserInput = {
    id?: string
    totalPrice?: number
    shippingFee?: number
    status?: number
    paymentMethod?: string
    paymentStatus?: number
    recipientName: string
    phone: string
    address: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: roleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type orderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    shippingFee?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: IntFieldUpdateOperationsInput | number
    recipientName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: userUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type orderItemCreateManyOrderInput = {
    id?: string
    productId: number
    variantId?: number | null
    quantity: number
    price: number
  }

  export type orderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutOrderItemNestedInput
    variant?: productvariantUpdateOneWithoutOrderItemNestedInput
  }

  export type orderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}