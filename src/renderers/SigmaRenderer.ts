/**
 * SigmaRenderer.ts
 * Andrea Tino - 2016
 */

/// <reference path="../definitions/sigmajs.d.ts"/>
/// <reference path="../Renderable.ts"/>
/// <reference path="../data/DataNode.ts"/>

namespace contnet.renderers {
    import data = contnet.data;

    /**
     * Provides rendering services for {DataNode}
     * 
     * @export
     * @class SigmaRenderer
     * @implements {Renderable<SigmaJs.Node>}
     */
    export class SigmaRenderer implements Renderable<SigmaJs.Node> {
        private node: data.DataNode;

        /**
         * Creates an instance of SigmaRenderer.
         * 
         * @param {data.DataNode} name
         * @memberOf SigmaRenderer
         */
        public constructor(node: data.DataNode) {
            if (!node) {
                throw "A node must be provided!";
            }

            this.node = node;
        }

        /**
         * Renders the node.
         * 
         * @returns {SigmaJs.Node}
         * @memberOf SigmaRenderer
         */
        public render(): SigmaJs.Node {
            return {
                color: null,
                id: null,
                image: null,
                label: null,
                size: null,
                type: null,
                x: null,
                y: null
            };
        }
    }
}
