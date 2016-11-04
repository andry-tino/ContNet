/**
 * Renderable.ts
 * Andrea Tino - 2016
 */

namespace contnet {
    /**
     * Describes nodes that can be rendered in the graph format.
     * 
     * @export
     * @interface Renderable
     * @template T
     */
    export interface Renderable<T> {
        /**
         * Renders the node.
         * 
         * @returns {T}
         * @memberOf Renderable
         */
        render(): T;
    }
}
