/**
 * DataNode.ts
 * Andrea Tino - 2016
 */

/// <reference path="Node.ts"/>

namespace contnet.data {
    /**
     * Represents a data node.
     * 
     * @export
     * @class DataNode
     */
    export class DataNode extends Node {
        private _url: string;

        /**
         * Creates an instance of DataNode.
         * 
         * @param {string} name
         * @memberOf DataNode
         */
        public constructor(name: string) {
            super(name);
        }
        
        /**
         * Gets the url.
         * 
         * @memberOf DataNode
         */
        public get url() {
            return this._url;
        }

        /**
         * Sets the url.
         * 
         * @memberOf DataNode
         */
        public set url(value) {
            this._url = value;
        }
    }
}
