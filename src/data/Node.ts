/**
 * Node.ts
 * Andrea Tino - 2016
 */

namespace contnet.data {
    /**
     * Represents a node.
     * 
     * @export
     * @class Node
     */
    export abstract class Node {
        private _id: string;
        private readonly _name: string;

        /**
         * Creates an instance of Node.
         * 
         * @param {string} name
         * @memberOf Node
         */
        public constructor(name: string) {
            if (!name) {
                throw "A name must be provided!";
            }

            this._id = Node.computeId();
            this._name = name;
        }

        /**
         * Gets the name of the node.
         * 
         * @readonly
         * @type {string}
         * @memberOf Node
         */
        public get name(): string {
            return this.name;
        }

        /**
         * Gets the id.
         * 
         * @readonly
         * @type {string}
         * @memberOf Node
         */
        public get id(): string {
            return this._id;
        }

        private static computeId(): string {
            return Math.random().toString(16).substring(9);
        }
    }
}
