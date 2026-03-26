// Main student-editable configuration file.
// Most gameplay changes should happen here, not in engine files.

export const GAME_CONFIG = {
    tileSize: 32,

    // Map size is counted in tiles, not pixels.
    map: {
        imageSrc: "assets/map/map.jpg",
        overlaySrc: "assets/map/map_overlay.png",
        widthTiles: 187,
        heightTiles: 125,
    },

    // Camera size is in pixels.
    // Smaller values feel more zoomed in.
    camera: {
        widthPx: 600,
        heightPx: 500,
    },

    // Player setup.
    player: {
        startTile: {x: 104, y: 30},
        moveDurationMs: 150,
        defaultFacing: "down",
        spriteSheetSrc: "assets/player/player_sheet.png",
        frameWidth: 32,
        frameHeight: 32,

        // Direction rows in the sprite sheet.
        // Frames can stay at 1 if you do not want animation.
        directions: {
            up: {row: 0, frames: 4},
            down: {row: 1, frames: 4},
            left: {row: 2, frames: 4},
            right: {row: 3, frames: 4},
        },

        // Extra named animations can use any other row in the same sheet.
        // Use these names from trigger actions with:
        // { kind: "playPlayerAnimation", animationKey: "happy", loops: 2 }
        animations: {
            exclamation: {row: 4, frames: 2, speed: 180},
            angry: {row: 5, frames: 2, speed: 180},
        },
    },

    // Simple player data that triggers can read and change.
    // Use items for keys, coins, quest items, and collectibles.
    // Use stats for numbers like health, score, energy, or strength.
    // Example trigger checks:
    // { scope: "items", key: "coin", op: ">=", value: 1 }
    // { scope: "stats", key: "health", op: "<=", value: 2 }
    playerState: {
        items: {
            coin: 0,
            clue: 4,
            weapon: 0
        },
        stats: {
            health: 5,
            strength: 1,
            slug_health: 2,
            boss_health: 5,
            swamp_health: 2,
        },
    },

    // Event -> sound key mapping.
    // These are built-in engine events.
    audioEvents: {
        step: "step",
        interact: "interact",
        teleport: "teleport",
        ui_open_modal: "ui_open_modal",
    },

    // Sound key -> file path mapping.
    // Add your own keys here, then use them in trigger actions.
    sounds: {
        step: "assets/sfx/step.wav",
        interact: "assets/sfx/interact.wav",
        pickup: "assets/sfx/pickup.wav",
        teleport: "assets/sfx/teleport.wav",
        ui_open_modal: "assets/sfx/interact.wav",
        bgmusic: "assets/sfx/bgmusic.mp3",
    },

    // Non-walkable cells.
    // Use either:
    // - Single tile: { x: 10, y: 4 }
    // - Filled range (line or rectangle): { x1: 8, y1: 4, x2: 12, y2: 4 }
    // Good for walls, water, furniture, and room borders.

    solidTiles: [
        //Village
        {x1: 120, y1: 21, x2: 128, y2: 27}, // trees by houses (right)
        {x1: 120, y1: 15, x2: 127, y2: 20}, // trees by houses (right)
        {x1: 115, y1: 20, x2: 119, y2: 23}, // pink and orange house
        {x1: 114, y1: 39, x2: 118, y2: 43}, // yellow and pink house
        {x1: 105, y1: 37, x2: 110, y2: 41}, // pink and yellow house
        {x1: 91, y1: 41, x2: 95, y2: 44}, // red and pink house
        {x1: 85, y1: 26, x2: 91, y2: 29}, // orange and pink house
        {x1: 89, y1: 17, x2: 93, y2: 20}, //orange and light pink house
        {x1: 101, y1: 21, x2: 105, y2: 23}, // pink on pink house
        {x1: 78, y1: 9, x2: 79, y2: 20}, //trees by houses (left)
        {x1: 81, y1: 9, x2: 84, y2: 18}, //trees by houses (left)
        {x1: 80, y1: 20, x2: 87, y2: 24}, //trees by houses (left)
        {x1: 129, y1: 30, x2: 136, y2: 49}, //trees just by village (circle)
        //Portal in village
        {x1: 102, y1: 31, x2: 101, y2: 31}, //Rocks by portal
        {x1: 101, y1: 30, x2: 101, y2: 29}, //Rocks by portal
        {x1: 102, y1: 29, x2: 108, y2: 29}, //Rocks by portal
        {x1: 108, y1: 30, x2: 109, y2: 31}, //Rocks by portal
        {x1: 108, y1: 32, x2: 105, y2: 23}, //Rocks by portal
        //Top map
        {x1: 85, y1: 2, x2: 125, y2: 6}, //Trees top mp
        {x1: 79, y1: 3, x2: 85, y2: 7}, //Trees by houses (left up)
        {x1: 77, y1: 4, x2: 79, y2: 20}, // trees by houses (left/up)
        {x1: 80, y1: 3, x2: 125, y2: 7}, //trees up
        {x1: 137, y1: 0, x2: 0, y2: 4}, //Top map - from look post-water
        {x1: 128, y1: 4, x2: 135, y2: 8}, //trees by look-post
        {x1: 0, y1: 0, x2: 164, y2: 1}, //Top of map
        //Swamp
        {x1: 34, y1: 13, x2: 34, y2: 15}, //one tree in the swamp
        {x1: 22, y1: 12, x2: 22, y2: 15}, //one tree in the swamp
        {x1: 26, y1: 16, x2: 28, y2: 20}, //One tree in the swamp
        {x1: 40, y1: 15, x2: 42, y2: 18}, //One tree in the swamp (Leaf)
        {x1: 41, y1: 19, x2: 41, y2: 22}, //One tree in the swamp (stump)
        {x1: 17, y1: 30, x2: 18, y2: 24}, //One tree in the swamp
        {x1: 20, y1: 40, x2: 22, y2: 41}, //One tree in the swamp (leaf)
        {x1: 21, y1: 42, x2: 21, y2: 45}, //One tree in the swamp (stump)
        {x1: 38, y1: 31, x2: 39, y2: 36}, //One tree in the swamp
        {x1: 44, y1: 0, x2: 68, y2: 10}, //Trees by swamp
        {x1: 44, y1: 11, x2: 67, y2: 14}, //Trees by swamp - closer
        {x1: 57, y1: 15, x2: 67, y2: 18}, //trees by swamp - closer
        {x1: 68, y1: 0, x2: 94, y2: 8}, //Trees a bit away from swamp
        //Trees in the middle of the map (cluster 1)
        {x1: 67, y1: 38, x2: 71, y2: 40}, //up
        {x1: 66, y1: 40, x2: 75, y2: 53}, //Trees in the middle
        {x1: 75, y1: 42, x2: 76, y2: 52}, //Left side
        {x1: 64, y1: 41, x2: 66, y2: 54}, //Right side
        {x1: 67, y1: 51, x2: 72, y2: 55}, //Down
        //(cluster 2)
        {x1: 84, y1: 48, x2: 91, y2: 57},
        //Waterfall
        {x1: 149, y1: 0, x2: 150, y2: 4}, //Rock by waterfall
        {x1: 151, y1: 0, x2: 151, y2: 5}, //Rock by waterfall
        {x1: 152, y1: 0, x2: 159, y2: 7}, //Rock by waterfall
        {x1: 0, y1: 0, x2: 76, y2: 6}, // left-top (water) of map
        {x1: 0, y1: 6, x2: 13, y2: 58}, // player blocked by water
        {x1: 143, y1: 33, x2: 148, y2: 43}, //trees just by the other (circle 2)
        {x1: 159, y1: 11, x2: 164, y2: 14}, //Waterfall-start-water flowing
        {x1: 164, y1: 12, x2: 175, y2: 16}, //Trees by waterfall
        {x1: 163, y1: 17, x2: 170, y2: 19}, //Trees by waterfall
        {x1: 172, y1: 9, x2: 179, y2: 11}, //Trees by waterfall
        {x1: 178, y1: 0, x2: 186, y2: 5}, //Trees and rock by waterfall
        {x1: 155, y1: 0, x2: 171, y2: 6}, // Rock by waterfall
        {x1: 179, y1: 0, x2: 186, y2: 6}, //Trees by waterfall small cluster
        //Water
        {x1: 158, y1: 15, x2: 163, y2: 17}, //continuing water flow
        {x1: 152, y1: 17, x2: 161, y2: 20}, //continuing water flow (start stone)
        {x1: 153, y1: 21, x2: 161, y2: 24}, //continuing water flow (on stone)
        {x1: 152, y1: 25, x2: 161, y2: 26}, //continuing water flow (after stone)
        {x1: 154, y1: 27, x2: 161, y2: 27}, //continuing water flow
        {x1: 155, y1: 28, x2: 161, y2: 28}, //continuing water flow
        {x1: 157, y1: 29, x2: 160, y2: 39}, //continuing water flow
        {x1: 157, y1: 40, x2: 159, y2: 42}, //continuing water flow
        {x1: 155, y1: 43, x2: 158, y2: 43}, //bend in water flow
        {x1: 155, y1: 45, x2: 157, y2: 44}, //water flow
        {x1: 153, y1: 46, x2: 155, y2: 46}, //water flow
        {x1: 155, y1: 47, x2: 155, y2: 47}, //water flow
        {x1: 151, y1: 48, x2: 154, y2: 48}, //water flow
        {x1: 150, y1: 49, x2: 153, y2: 49}, //water flow
        {x1: 149, y1: 50, x2: 152, y2: 50}, //Water flow
        {x1: 148, y1: 51, x2: 151, y2: 51}, //Water flow
        {x1: 146, y1: 52, x2: 150, y2: 52}, //Water flow
        {x1: 145, y1: 53, x2: 148, y2: 53}, //Water flow
        {x1: 144, y1: 54, x2: 147, y2: 54}, //Water by mushrooms
        {x1: 142, y1: 55, x2: 146, y2: 55}, //Water by mushrooms
        {x1: 141, y1: 56, x2: 145, y2: 56}, //Water by mushrooms
        {x1: 139, y1: 57, x2: 143, y2: 57}, //Water by mushrooms
        {x1: 138, y1: 58, x2: 142, y2: 58}, //Water by mushrooms
        {x1: 136, y1: 59, x2: 141, y2: 59}, //Water by mushrooms
        {x1: 135, y1: 60, x2: 139, y2: 60}, //Water by mushrooms
        {x1: 134, y1: 61, x2: 138, y2: 61}, //Water by mushrooms
        {x1: 133, y1: 62, x2: 137, y2: 62}, //Water by mushrooms
        {x1: 131, y1: 63, x2: 136, y2: 63}, //Water by mushrooms
        {x1: 130, y1: 64, x2: 134, y2: 64}, //Water by bridge
        {x1: 131, y1: 65, x2: 133, y2: 65}, //Water by bridge
        {x1: 123, y1: 66, x2: 127, y2: 66}, //Water by bridge
        {x1: 120, y1: 67, x2: 128, y2: 67}, //Water by bridge
        {x1: 116, y1: 68, x2: 128, y2: 68}, //Water continues flowing
        {x1: 114, y1: 69, x2: 126, y2: 69}, //Water continues flowing
        {x1: 112, y1: 70, x2: 123, y2: 70}, //Water continues flowing
        {x1: 110, y1: 71, x2: 120, y2: 71}, //Water continues flowing
        {x1: 109, y1: 72, x2: 118, y2: 72}, //Water continues
        {x1: 107, y1: 73, x2: 112, y2: 73}, //Small water-flow
        {x1: 106, y1: 74, x2: 109, y2: 74}, //Small water-flow
        {x1: 103, y1: 75, x2: 107, y2: 75}, //Small water-flow
        {x1: 103, y1: 76, x2: 107, y2: 76}, //Small water-flow
        {x1: 103, y1: 77, x2: 107, y2: 76}, //Water by big tree
        {x1: 103, y1: 78, x2: 105, y2: 78}, //Water by big tree
        {x1: 103, y1: 79, x2: 104, y2: 79}, //Water by big tree
        {x1: 103, y1: 80, x2: 103, y2: 81}, //Water by big tree
        {x1: 99, y1: 75, x2: 102, y2: 83}, //Water by big tree
        {x1: 161, y1: 37, x2: 168, y2: 41}, //Trees by water (small)
        //Big tree
        {x1: 94, y1: 64, x2: 98, y2: 72}, //Big tree leaf
        {x1: 99, y1: 65, x2: 102, y2: 73}, //More leaf (right)
        {x1: 90, y1: 65, x2: 95, y2: 74}, //more leaf (Left)
        {x1: 96, y1: 74, x2: 98, y2: 78}, //Stump of the big tree
        {x1: 94, y1: 75, x2: 95, y2: 75}, //Water by the tree
        {x1: 89, y1: 76, x2: 98, y2: 76}, //Water by the tree
        {x1: 88, y1: 77, x2: 92, y2: 77}, //Water by tree
        {x1: 84, y1: 78, x2: 91, y2: 78}, //Water by the tree
        {x1: 83, y1: 79, x2: 91, y2: 79}, //Water by the tree
        {x1: 84, y1: 80, x2: 91, y2: 80}, //Water by tree
        {x1: 92, y1: 81}, //Water by th tree
        //Mushroom
        {x1: 162, y1: 45, x2: 183, y2: 51}, //Trees and mushrooms by water
        {x1: 158, y1: 47, x2: 162, y2: 57}, //Trees and mushrooms
        {x1: 153, y1: 50, x2: 157, y2: 57}, //Trees and mushroom by water
        {x1: 152, y1: 51, x2: 152, y2: 57}, //mushrooms by water
        {x1: 147, y1: 53, x2: 151, y2: 57}, //Mushrooms by water
        {x1: 146, y1: 57, x2: 147, y2: 63}, //Yellow Mushroom
        {x1: 142, y1: 60, x2: 143, y2: 64}, //little orange Mushroom
        {x1: 138, y1: 58, x2: 141, y2: 64}, //yellow and blue mushroom
        {x1: 149, y1: 60, x2: 150, y2: 63}, //little purple mushroom
        {x1: 152, y1: 56, x2: 157, y2: 62}, //Big orange mushroom
        {x1: 158, y1: 51, x2: 171, y2: 61}, //Big cluster of mushrooms
        {x1: 174, y1: 58, x2: 176, y2: 61}, //Little blue mushroom
        {x1: 175, y1: 61, x2: 178, y2: 63}, //Tiny purple mushroom
        {x1: 180, y1: 47, x2: 186, y2: 61}, //Cluster of mushrooms
        {x1: 155, y1: 71, x2: 186, y2: 77}, //Mushrooms and mountains
        {x1: 117, y1: 74, x2: 129, y2: 79}, //Mushrooms and mountains
        {x1: 150, y1: 67, x2: 150, y2: 69}, //Tiny blue mushroom
        {x1: 157, y1: 67, x2: 164, y2: 72}, //Muck by mushroom
        {x1: 164, y1: 66, x2: 186, y2: 72}, //Muck by mushrooms
        {x1: 169, y1: 60, x2: 176, y2: 71}, // Muck by mushroom
        {x1: 158, y1: 59, x2: 172, y2: 64}, //Muck by mushrooms
        //Bottom map
        {x1: 60, y1: 72, x2: 67, y2: 77}, //Bottom tree cluster
        {x1: 56, y1: 67, x2: 63, y2: 71}, //Above the other tree cluster
        {x1: 66, y1: 66, x2: 79, y2: 71}, //Besides the tree cluster (trees)
        {x1: 63, y1: 61, x2: 78, y2: 66}, //Above the tree cluster
        {x1: 111, y1: 73, x2: 118, y2: 79}, //Trees by mushrooms
        //Mountain
        {x1: 0, y1: 70, x2: 33, y2: 93}, //Mountain far left of map
        {x1: 35, y1: 81, x2: 61, y2: 97}, //Mountains left side of map
        {x1: 63, y1: 92, x2: 155, y2: 101}, //Mountains going to boss cave
        {x1: 130, y1: 75, x2: 165, y2: 95}, //Mountains and some mushrooms - with boss cave
        {x1: 163, y1: 72, x2: 186, y2: 97}, // Mountains by boss cave
        //Magical mushroom portal
        {x1: 0, y1: 94, x2: 4, y2: 124}, //Far left side (bottom) of map
        {x1: 4, y1: 111, x2: 100, y2: 124}, //Continuing bottom of map (left)
        {x1: 101, y1: 115, x2: 119, y2: 124}, //Continuing bottom of map (mid)
        {x1: 120, y1: 118, x2: 176, y2: 124}, //Continuing bottom of map (right)
        {x1: 173, y1: 69, x2: 186, y2: 124}, //Continuing map (whole of right side)
        {x1: 140, y1: 106, x2: 159, y2: 113}, // boss section, enterence top. work on gate,
        // make one key stone  sprite with action passable, surround by solids and a text about an invisibel wall blocking the way forward
        {x1: 142, y1: 116, x2: 186, y2: 124}, //continuing map (right side-bottom)
        {x1: 25, y1: 99, x2: 28, y2: 101}, //Water around portal
        {x1: 23, y1: 99, x2: 25, y2: 99}, //Water around portal
        {x1: 15, y1: 98, x2: 10, y2: 99}, //Water around portal
        {x1: 14, y1: 101, x2: 10, y2: 101}, //Water around portal
        {x1: 10, y1: 102, x2: 14, y2: 102}, //Water around portal
        {x1: 11, y1: 103, x2: 14, y2: 103}, //Water around portal
        {x1: 13, y1: 104, x2: 26, y2: 104}, //Water around portal
        {x1: 15, y1: 105, x2: 25, y2: 105}, //Water around portal
        {x1: 132, y1: 104, x2: 137, y2: 104}, //Rock by boss cave
        {x1: 132, y1: 105, x2: 139, y2: 106}, //Rock by boss cave
        //The portal
        {x1: 17, y1: 100, x2: 15, y2: 100}, //Rocks by portal
        {x1: 15, y1: 99, x2: 15, y2: 98}, //Rocks by portal
        {x1: 17, y1: 98, x2: 24, y2: 98}, //Rocks by portal
        {x1: 23, y1: 98, x2: 24, y2: 100}, //Rocks by portal
        {x1: 20, y1: 101, x2: 23, y2: 101}, //Rocks by portal
        {x1: 20, y1: 96, x2: 20, y2: 94}, //Mushrooms around portal (Bottom yellow)
        {x1: 17, y1: 90, x2: 20, y2: 92}, //Mushrooms around portal (top yellow)
        {x1: 10, y1: 98, x2: 10, y2: 93}, //Mushrooms around portal (bottom purple)
        {x1: 10, y1: 91, x2: 13, y2: 92}, //Mushrooms around portal (top purple)
        {x1: 6, y1: 103, x2: 6, y2: 99}, //mushrooms around portal (bottom pink)
        {x1: 4, y1: 96, x2: 7, y2: 99}, //Mushrooms around portal (top pink)
        {x1: 8, y1: 108, x2: 8, y2: 106}, //Mushrooms around portal (bottom dark-pink)
        {x1: 8, y1: 105, x2: 9, y2: 105}, //Mushrooms around portal (top dark-pink)
        {x1: 14, y1: 110, x2: 14, y2: 108}, //Mushrooms around portal (bottom glow-yellow)
        {x1: 13, y1: 106, x2: 14, y2: 107}, //Mushrooms around portal (top glow-yellow)
        {x1: 31, y1: 110, x2: 30, y2: 108}, //Mushrooms around portal (bottom purple left)
        {x1: 28, y1: 106, x2: 30, y2: 107}, //Mushrooms around portal (top purple left)
        {x1: 22, y1: 93, x2: 23, y2: 95}, //Dice
        //Boss cave (rocks + crystals)
        {x1: 139, y1: 106, x2: 156, y2: 111}, //big solid rock (right)
        {x1: 139, y1: 112, x2: 147, y2: 112}, //Big solid rock (bottom right)
        {x1: 144, y1: 102, x2: 151, y2: 105}, //Big solid rock (top right)
        {x1: 151, y1: 95, x2: 161, y2: 105}, //Big solid rock (middle)
        {x1: 152, y1: 88, x2: 186, y2: 98}, //Big solid rock (middle-left)
        {x1: 158, y1: 117, x2: 186, y2: 125}, //Big solid rock (middle bottom)
        {x1: 164, y1: 114, x2: 174, y2: 124}, //Big solid rock (middle bottom)

        {x1: 142, y1: 116, x2: 186, y2: 124}, //continuing map (right side-bottom)
        {x1: 25, y1: 99, x2: 28, y2: 101}, //Water around portal
        {x1: 23, y1: 99, x2: 25, y2: 99}, //Water around portal
        {x1: 15, y1: 98, x2: 10, y2: 99}, //Water around portal
        {x1: 14, y1: 101, x2: 10, y2: 101}, //Water around portal
        {x1: 10, y1: 102, x2: 14, y2: 102}, //Water around portal
        {x1: 11, y1: 103, x2: 14, y2: 103}, //Water around portal
        {x1: 13, y1: 104, x2: 26, y2: 104}, //Water around portal
        {x1: 15, y1: 105, x2: 25, y2: 105}, //Water around portal
        {x1: 132, y1: 104, x2: 137, y2: 104}, //Rock by boss cave
        {x1: 132, y1: 105, x2: 139, y2: 106}, //Rock by boss cave
        //The portal
        {x1: 17, y1: 100, x2: 15, y2: 100}, //Rocks by portal
        {x1: 15, y1: 99, x2: 15, y2: 98}, //Rocks by portal
        {x1: 17, y1: 98, x2: 24, y2: 98}, //Rocks by portal
        {x1: 23, y1: 98, x2: 24, y2: 100}, //Rocks by portal
        {x1: 20, y1: 101, x2: 23, y2: 101}, //Rocks by portal
        {x1: 20, y1: 96, x2: 20, y2: 94}, //Mushrooms around portal (Bottom yellow)
        {x1: 17, y1: 90, x2: 20, y2: 92}, //Mushrooms around portal (top yellow)
        {x1: 10, y1: 98, x2: 10, y2: 93}, //Mushrooms around portal (bottom purple)
        {x1: 10, y1: 91, x2: 13, y2: 92}, //Mushrooms around portal (top purple)
        {x1: 6, y1: 103, x2: 6, y2: 99}, //mushrooms around portal (bottom pink)
        {x1: 4, y1: 96, x2: 7, y2: 99}, //Mushrooms around portal (top pink)
        {x1: 8, y1: 108, x2: 8, y2: 106}, //Mushrooms around portal (bottom dark-pink)
        {x1: 8, y1: 105, x2: 9, y2: 105}, //Mushrooms around portal (top dark-pink)
        {x1: 14, y1: 110, x2: 14, y2: 108}, //Mushrooms around portal (bottom glow-yellow)
        {x1: 13, y1: 106, x2: 14, y2: 107}, //Mushrooms around portal (top glow-yellow)
        {x1: 31, y1: 110, x2: 30, y2: 108}, //Mushrooms around portal (bottom purple left)
        {x1: 28, y1: 106, x2: 30, y2: 107}, //Mushrooms around portal (top purple left)
        {x1: 22, y1: 93, x2: 23, y2: 95}, //Dice
        //Boss cave (rocks + crystals)
        {x1: 139, y1: 106, x2: 156, y2: 111}, //big solid rock (right)
        {x1: 139, y1: 112, x2: 147, y2: 112}, //Big solid rock (bottom right)
        {x1: 144, y1: 102, x2: 151, y2: 105}, //Big solid rock (top right)
        {x1: 151, y1: 95, x2: 161, y2: 105}, //Big solid rock (middle)
        {x1: 152, y1: 88, x2: 186, y2: 98}, //Big solid rock (middle-left)
        {x1: 158, y1: 117, x2: 186, y2: 125}, //Big solid rock (middle bottom)
        {x1: 164, y1: 114, x2: 174, y2: 124}, //Big solid rock (middle bottom)

        {x1: 142, y1: 116, x2: 186, y2: 124}, //continuing map (right side-bottom)
        {x1: 25, y1: 99, x2: 28, y2: 101}, //Water around portal
        {x1: 23, y1: 99, x2: 25, y2: 99}, //Water around portal
        {x1: 15, y1: 98, x2: 10, y2: 99}, //Water around portal
        {x1: 14, y1: 101, x2: 10, y2: 101}, //Water around portal
        {x1: 10, y1: 102, x2: 14, y2: 102}, //Water around portal
        {x1: 11, y1: 103, x2: 14, y2: 103}, //Water around portal
        {x1: 13, y1: 104, x2: 26, y2: 104}, //Water around portal
        {x1: 15, y1: 105, x2: 25, y2: 105}, //Water around portal
        {x1: 132, y1: 104, x2: 137, y2: 104}, //Rock by boss cave
        {x1: 132, y1: 105, x2: 139, y2: 106}, //Rock by boss cave
        //The portal
        {x1: 17, y1: 100, x2: 15, y2: 100}, //Rocks by portal
        {x1: 15, y1: 99, x2: 15, y2: 98}, //Rocks by portal
        {x1: 17, y1: 98, x2: 24, y2: 98}, //Rocks by portal
        {x1: 23, y1: 98, x2: 24, y2: 100}, //Rocks by portal
        {x1: 20, y1: 101, x2: 23, y2: 101}, //Rocks by portal
        {x1: 20, y1: 96, x2: 20, y2: 94}, //Mushrooms around portal (Bottom yellow)
        {x1: 17, y1: 90, x2: 20, y2: 92}, //Mushrooms around portal (top yellow)
        {x1: 10, y1: 98, x2: 10, y2: 93}, //Mushrooms around portal (bottom purple)
        {x1: 10, y1: 91, x2: 13, y2: 92}, //Mushrooms around portal (top purple)
        {x1: 6, y1: 103, x2: 6, y2: 99}, //mushrooms around portal (bottom pink)
        {x1: 4, y1: 96, x2: 7, y2: 99}, //Mushrooms around portal (top pink)
        {x1: 8, y1: 108, x2: 8, y2: 106}, //Mushrooms around portal (bottom dark-pink)
        {x1: 8, y1: 105, x2: 9, y2: 105}, //Mushrooms around portal (top dark-pink)
        {x1: 14, y1: 110, x2: 14, y2: 108}, //Mushrooms around portal (bottom glow-yellow)
        {x1: 13, y1: 106, x2: 14, y2: 107}, //Mushrooms around portal (top glow-yellow)
        {x1: 31, y1: 110, x2: 30, y2: 108}, //Mushrooms around portal (bottom purple left)
        {x1: 28, y1: 106, x2: 30, y2: 107}, //Mushrooms around portal (top purple left)
        {x1: 22, y1: 93, x2: 23, y2: 95}, //Dice
        //Boss cave (rocks + crystals)
        {x1: 139, y1: 106, x2: 156, y2: 111}, //big solid rock (right)
        {x1: 139, y1: 112, x2: 147, y2: 112}, //Big solid rock (bottom right)
        {x1: 144, y1: 102, x2: 151, y2: 105}, //Big solid rock (top right)
        {x1: 151, y1: 95, x2: 161, y2: 105}, //Big solid rock (middle)
        {x1: 152, y1: 88, x2: 186, y2: 98}, //Big solid rock (middle-left)
        {x1: 158, y1: 117, x2: 186, y2: 125}, //Big solid rock (middle bottom)
        {x1: 164, y1: 114, x2: 174, y2: 124}, //Big solid rock (middle bottom)
        {x1: 16, y1: 102, x2: 25, y2: 102}, // portal b water
        {x1: 27, y1: 103,}, // portal b water 2

    ],

    // Triggers are the main way to build gameplay.
    // One trigger can do multiple things by using actions: [...]
    //
    // Trigger types:
    // - onEnterCell: runs when the player steps on the tile
    // - onInteractCell: runs when the player faces the tile and presses Space/Enter
    //
    // Trigger helper keys:
    // - isSolid: true (blocks movement on that tile)
    // - sprite: "assets/sprites/your_image.png" (draws a 32x32 image on the tile)
    // - sprite: "assets/sprites/portal.gif" (animated gif)
    // - sprite: { src: "assets/sprites/portal.png", frames: 4, speed: 150 } (spritesheet)
    // - drawAbovePlayer: true (draws the trigger sprite above the player, but below map.overlaySrc)
    // - conditions: [{ scope: "items", key: "coin", op: ">=", value: 1 }]
    // - actions: [{ kind: "playSound", soundKey: "interact" }, { kind: "giveItem", itemKey: "coin", amount: 1 }]
    // - elseAction: { kind: "openModalText", title: "...", text: "..." }
    //
    // Supported action kinds:
    // - playSound
    // - playPlayerAnimation
    // - openModalText
    // - openModalVideo
    // - openModalHtml
    // - teleport
    // - giveItem
    // - removeItem
    // - changeStat
    // - setStat
    // - makePassable
    //
    // Small action examples:
    // { kind: "playSound", soundKey: "interact" }
    // { kind: "giveItem", itemKey: "coin", amount: 1 }
    // { kind: "changeStat", statKey: "health", amount: -1 }
    // { kind: "playPlayerAnimation", animationKey: "happy", loops: 2 }
    // { kind: "openModalText", title: "Hello", text: "Welcome!" }
    // { kind: "teleport", targetX: 10, targetY: 4 }
    // { kind: "makePassable", passableSprite: null }
    triggers: [

        {
            id: "startloredump",
            x: 104,
            y: 31,
            type: "onEnterCell",
            once: true,
            actions: [
                {
                    kind: "openModalText",
                    title: "Introduction",
                    text: "In a land not unlike our own, a young hero was sent by his lord on a quest. As the young hero was traveling through the forrest, he came to a clearing in the trees. Here he set up camp there. What the young hero didnt know was that a ring of glowing mushrooms and small standing stones surrounded the clearing and when the young hero woke, he had been transported to a different realm. A realm known as the 'Feywild', if he wants to complete his lords quest he must escape the Feywild. To do this he must seek the mushroom girl in town who will help him find his way to the tyrant ruling this realm and escape",
                }
            ]
        },

        //chests
        {
            id: "looted chest 4",
            type: "onInteractCell",
            isSolid: true,
            x: 138,
            y: 51,
            sprite: "assets/sprites/pix chest open.png",
            actions: [
                {
                    kind: "playPlayerAnimation",
                    animationKey: "angry",
                    loops: 4,
                },
                {
                    kind: "openModalText",
                    title: "Whoops",
                    text: "it looks like you already looted this chest, try and find another one instead"
                }
            ]
        },
        {
            id: "chestclosed 4",
            type: "onInteractCell",
            isSolid: true,
            x: 138,
            y: 51,
            once: true,
            sprite: "assets/sprites/pix chest closed.png",
            actions: [
                {
                    kind: "openModalHtml",
                    contentKey: "crystalsword"

                },
                {
                    kind: "playSound",
                    soundKey: "pickup"
                },
                {
                    kind: "playPlayerAnimation",
                    animationKey: "exclamation",
                    loops: 4,
                },
                {
                    kind: "giveItem",
                    itemKey: "Crystal Sword",
                    itemKey: "weapon",
                    amount: 1,
                },
            ]
        },
        {
            id: "looted chest 3",
            type: "onInteractCell",
            isSolid: true,
            x: 138,
            y: 51,
            sprite: "assets/sprites/pix chest open.png",
            actions: [
                {
                    kind: "playPlayerAnimation",
                    animationKey: "angry",
                    loops: 4,
                },
                {
                    kind: "openModalText",
                    title: "Whoops",
                    text: "it looks like you already looted this chest, try and find another one instead"
                }
            ]
        },
        {
            id: "chestclosed 3",
            type: "onInteractCell",
            isSolid: true,
            x: 138,
            y: 51,
            once: true,
            sprite: "assets/sprites/pix chest closed.png",
            actions: [
                {
                    kind: "openModalHtml",
                    contentKey: "axe"

                },
                {
                    kind: "playSound",
                    soundKey: "pickup"
                },
                {
                    kind: "playPlayerAnimation",
                    animationKey: "exclamation",
                    loops: 4,
                },
                {
                    kind: "giveItem",
                    itemKey: "Axe",
                    itemKey: "weapon",
                    amount: 1,
                },
            ]
        },
        {
            id: "looted chest 2",
            type: "onInteractCell",
            isSolid: true,
            x: 70,
            y: 17,
            sprite: "assets/sprites/pix chest open.png",
            actions: [
                {
                    kind: "playPlayerAnimation",
                    animationKey: "angry",
                    loops: 4,
                },
                {
                    kind: "openModalText",
                    title: "Whoops",
                    text: "it looks like you already looted this chest, try and find another one instead"
                }
            ]
        },
        {
            id: "chestclosed 2",
            type: "onInteractCell",
            isSolid: true,
            x: 70,
            y: 17,
            once: true,
            sprite: "assets/sprites/pix chest closed.png",
            actions: [
                {
                    kind: "openModalHtml",
                    contentKey: "hammer"

                },
                {
                    kind: "playSound",
                    soundKey: "pickup"
                },
                {
                    kind: "playPlayerAnimation",
                    animationKey: "exclamation",
                    loops: 4,
                },
                {
                    kind: "giveItem",
                    itemKey: "Hammer",
                    itemKey: "weapon",
                    amount: 1,
                },

            ]
        },
        {
            id: "looted chest 1",
            type: "onInteractCell",
            isSolid: true,
            x: 60,
            y: 62,
            sprite: "assets/sprites/pix chest open.png",
            actions: [
                {
                    kind: "playPlayerAnimation",
                    animationKey: "angry",
                    loops: 4,
                },
                {
                    kind: "openModalText",
                    title: "Whoops",
                    text: "it looks like you already looted this chest, try and find another one instead"
                }

            ]

        },
        {
            id: "chestclosed 1",
            type: "onInteractCell",
            isSolid: true,
            x: 60,
            y: 62,
            once: true,
            sprite: "assets/sprites/pix chest closed.png",
            actions: [
                {
                    kind: "openModalHtml",
                    contentKey: "rapier"

                },
                {
                    kind: "playSound",
                    soundKey: "pickup"
                },
                {
                    kind: "playPlayerAnimation",
                    animationKey: "exclamation",
                    loops: 4,
                },
                {
                    kind: "giveItem",
                    itemKey: "Rapier",
                    itemKey: "weapon",
                    amount: 1,
                },

            ]
        },

        //signs
        {
            id: "vandfald_sign",
            type: "onInteractCell",
            x: 126,
            y: 27,
            isSolid: true,
            sprite: "assets/sprites/sign 1.png",
            actions: [
                {
                    kind: "openModalText",
                    title: "Crystal Falls this way",
                    text: "Follow the water.. obviously",
                },
            ]
        },
        {
            id: "forest_sign",
            type: "onInteractCell",
            x: 98,
            y: 57,
            isSolid: true,
            sprite: "assets/sprites/sign 3.png",
            actions: [
                {
                    kind: "openModalText",
                    title: "Mushroom Grove this way",
                    text: "Follow the road over the bridge.",
                },
            ]
        },
        {
            id: "mangrove_sign",
            type: "onInteractCell",
            x: 82,
            y: 41,
            isSolid: true,
            sprite: "assets/sprites/sign 4.png",
            actions: [
                {
                    kind: "openModalText",
                    title: "Crystal Mangrove this way",
                    text: "Follow the road.",
                },
            ]
        },
        {
            id: "tree_sign",
            type: "onInteractCell",
            x: 94,
            y: 57,
            isSolid: true,
            sprite: "assets/sprites/sign 2.png",
            actions: [
                {
                    kind: "openModalText",
                    title: "This way is a dead end",
                    text: "Follow the road.",
                },
            ]
        },

        //tree
        {
            id: "tree",
            type: "onEnterCell",
            x: 96,
            y: 80,
            conditions: [
                { scope: "stats", key: "clue", op: "=", value: 4}
            ],
            actions: [
                {
                    kind: "openModalText",
                    title: "Hello there little friend",
                    text: "Take the key and go back to where you started.",
                    kind: "openModalText",
                    title: "Crystal Falls this way",
                    text: "Follow the water.. obviously",
                },
            ]
        },
        {
            id: "forest_sign",
            type: "onInteractCell",
            x: 98,
            y: 57,
            isSolid: true,
            sprite: "assets/sprites/sign 3.png",
            actions: [
                {
                    kind: "openModalText",
                    title: "Mushroom Grove this way",
                    text: "Follow the road over the bridge.",
                },
            ]
        },

        //Frog
        {
            id: "frog 2",
            type: "onInteractCell",
            x: 82,
            y: 41,
            isSolid: true,
            x: 165,
            y: 10,
            sprite:
                {
                    src: "assets/sprites/frognpc.png",
                    frames: 4,
                    speed: 350,
                    tilesize: 32,
                },
            actions: [
                {
                    kind: "openModalText",
                    title: "Reed Hoppington",
                    text: "I already gave you the note... please stop interrupting my fishing"
                }
            ]
        },
        {
            id: "frog",
            type: "onInteractCell",
            isSolid: true,
            once: true,
            x: 165,
            y: 10,
            sprite: {
                src: "assets/sprites/frognpc.png",
                frames: 4,
                speed: 350,
                tilesize: 32,
            },
            actions: [
                {
                    kind: "giveItem",
                    itemKey: "Clue",
                    amount: 1
                },
                {
                    kind: "playSound",
                    soundKey: "pickup"
                },
                {
                    kind: "openModalText",
                    title: "Reed Hoppington",
                    text: "Hi I didnt see you there... Oh you want to get out of this realm? I found this note that might be of help. It says 'We stand in the water on many legs yet our limbs stay dry. We do not travel far for the land comes to us. What are we?' I haven't got a clue what that means, but maybe you can use it for something. ",
                },

            ]
        },

        //Mushroom girl
        {
            id: "mushroom2",
            type: "onInteractCell",
            x: 116,
            y: 24,
            isSolid: true,
            sprite: {
                src: "assets/sprites/npc-mushroom-sheet.png",
                frames: 4,
                speed: 350,
                tileSize: 32,
            },
            actions: [
                {
                    kind: "openModalText",
                    title: "A clue to where you need to go",
                    text: "Try going where there is water, streaming down the mountain.",
                },
            ],
        },
        {
            id: "mushroom1",
            type: "onInteractCell",
            x: 116,
            y: 24,
            once: true,
            isSolid: true,
            sprite: {
                src: "assets/sprites/npc-mushroom-sheet.png",
                frames: 4,
                speed: 350,
                tileSize: 32,
            },
            actions: [
                {
                    kind: "openModalText",
                    title: "Here is a clue!!",
                    text: "What belongs to you, but others use it more than you do?",
                },
                {
                    kind: "giveItem",
                    itemKey: "Clue",
                    amount: 1
                },

            ],
        },

        //swamp girl
        {
            id: "Swamp-girl dead1",
            type: "onInteractCell",
            x: 19,
            y: 35,
            isSolid: true,
            conditions: [
                {scope: "stats", key: "Swamp_health", op: "<=", value: 0},
            ],
            actions: [
                {
                    kind: "makePassable",
                    passableSprite: null,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                },
                {
                    kind: "openModalText",
                    title: "ARGH! almost dead",
                    text: "Here.. is your clue..." +
                        "I am soft, i am round, in forest floors i am found... What am i??"
                },
                {
                    kind: "giveItem",
                    itemKey: "Clue",
                    amount: 1
                },
            ],
        },
        {
            id: "swamp-girl2",
            type: "onInteractCell",
            x: 19,
            y: 35,
            once: true,
            isSolid: true,
            sprite: {
                src: "assets/sprites/npc-girl-sheet.png",
                frames: 4,
                speed: 350,
                tileSize: 32
            },
            actions: [
                {
                    kind: "changeStat",
                    statKey: "swamp_health",
                    amount: -1,
                },
                {
                    kind: "openModalText",
                    title: "ouchy!",
                    text: " Here.. is your clue..." +
                        "I am soft, i am round, in forest floors i am found... What am i??"
                },
                {
                    kind: "giveItem",
                    itemKey: "Clue",
                    amount: 1
                },
            ],
        },

        //slug
        {
            id: "slug",
            type: "onInteractCell",
            x: 168,
            y: 65,
            sprite: {
                src: "assets/sprites/slugsheet.png",
                frames: 4,
                speed: 350,
            },
            id: "tree_sign",
            type: "onInteractCell",
            x: 94,
            y: 57,
            isSolid: true,
            sprite: "assets/sprites/sign 2.png",
            actions: [
                {
                    kind: "openModalText",
                    title: "This way is a dead end",
                    text: "Follow the road.",
                },
            ]
        },

        //tree
        {
            id: "slug_dead",
            type: "onInteractCell",
            x: 168,
            y: 65,
            once: true,
            sprite: "assets/sprites/slugsheet.png",
            conditions: [
                {scope: "stats", key: "slug_health", op: "<=", value: 0}
            ],
            actions: [
            id: "tree",
            type: "onEnterCell",
            x: 96,
            y: 80,
            sprite:
                {
                    src: "assets/sprites/question.png",
                },
            conditions: [{
                scope: "items",
                key: "clue",
                op: "===",
                value: 4
            } ],
            actions: [
                {
                    kind: "openModalText",
                    title: "Good catch!",
                    text: "good job on founding the super special key! Now you can go battle the boss!!." +
                        " Take the key and go back to where you started."
                },
                {
                    kind: "giveItem",
                    itemKey: "super_special_key1",
                    amount: 1,
                },
                {
                    kind: "giveItem",
                    itemKey: "clue",
                    amount: 1,
                },
            ],
            elseAction: {
                kind: "openModalText",
                title: "sorry",
                text: "I cant help you, you dont have enough clues..."
            }
        },

        //boss
        {
            id: "bbg",
        //Frog
        {
            id: "frog 2",
            type: "onInteractCell",
            x: 165,
            y: 108,
            isSolid: true,
            conditions: [{scope: "items", key: "rapier" || "hammer" || "axe" || "crystal sword", op: ">=", value: 1}],
            actions: [
                {
                    kind: "changeStat",
                    statKey: "boss_health",
                    amount: -3,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                }
            ],
            elseaction: [{
                kind: "changeStat",
                statKey: "boss_health",
                amount: -1,
            },
                {
                    kind: "openModalText",
                    title: "AHHHH!",
                    text: "Ooh that looked like it hurts",
                }
            ]
        },
        {
            id: "bbg1",
            type: "onInteractCell",
            x: 166,
            y: 108,
            isSolid: true,
            conditions: [{scope: "items", key: "rapier" || "hammer" || "axe" || "crystal sword", op: ">=", value: 1}],
            actions: [
                {
                    kind: "changeStat",
                    statKey: "boss_health",
                    amount: -3,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                }
            ],
            elseaction: [{
                kind: "changeStat",
                statKey: "boss_health",
                amount: -1,
            },
                {
                    kind: "openModalText",
                    title: "AHHHH!",
                    text: "Ooh that looked like it hurts",
                }
            ]
        },
        {
            id: "bbg3",
            type: "onInteractCell",
            x: 167,
            y: 109,
            isSolid: true,
            conditions: [{scope: "items", key: "rapier" || "hammer" || "axe" || "crystal sword", op: ">=", value: 1}],
            actions: [
                {
                    kind: "changeStat",
                    statKey: "boss_health",
                    amount: -3,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                }
            ],
            elseaction: [{
                kind: "changeStat",
                statKey: "boss_health",
                amount: -1,
            },
                {
                    kind: "openModalText",
                    title: "AHHHH!",
                    text: "Ooh that looked like it hurts",
                }
            ]
        },
        {
            id: "bbg_dead",
            type: "onInteractCell",
            x: 165,
            y: 108,
            conditions: [
                {scope: "stats", key: "boss_health", op: "<=", value: 0}
            ],
            actions: [
                {
                    kind: "makePassable",
                    passableSprite: null,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                },
                {
                    kind: "openModalText",
                    title: "VICTORY!!",
                    text: "You did it, you defeated the boss... You can go now, leave this realm to its inhabitants, I'm sure someone is waiting for you at home"
            x: 165,
            y: 10,
            sprite:
                {
                    src: "assets/sprites/frognpc.png",
                    frames: 4,
                    speed: 350,
                    tilesize: 32,
                },
            actions: [
                {
                    kind: "openModalText",
                    title: "Reed Hoppington",
                    text: "I already gave you the note... please stop interrupting my fishing"
                }
            ]
        },
        {
            id: "frog",
            type: "onInteractCell",
            isSolid: true,
            once: true,
            x: 165,
            y: 10,
            sprite: {
                src: "assets/sprites/frognpc.png",
                frames: 4,
                speed: 350,
                tilesize: 32,
            },
            actions: [
                {
                    kind: "giveItem",
                    itemKey: "clue",
                    amount: 1
                },
                {
                    kind: "playSound",
                    soundKey: "pickup"
                },
                {
                    kind: "openModalText",
                    title: "Reed Hoppington",
                    text: "Hi I didnt see you there... Oh you want to get out of this realm? I found this note that might be of help. It says 'We stand in the water on many legs yet our limbs stay dry. We do not travel far for the land comes to us. What are we?' I haven't got a clue what that means, but maybe you can use it for something. ",
                },

            ]
        },

        //Mushroom girl
        {
            id: "mushroom2",
            type: "onInteractCell",
            x: 116,
            y: 24,
            isSolid: true,
            sprite: {
                src: "assets/sprites/npc-mushroom-sheet.png",
                frames: 4,
                speed: 350,
                tileSize: 32,
            },
            actions: [
                {
                    kind: "openModalText",
                    title: "A clue to where you need to go",
                    text: "Try going where there is water, streaming down the mountain.",
                },
            ],
        },
        {
            id: "mushroom1",
            type: "onInteractCell",
            x: 116,
            y: 24,
            once: true,
            isSolid: true,
            sprite: {
                src: "assets/sprites/npc-mushroom-sheet.png",
                frames: 4,
                speed: 350,
                tileSize: 32,
            },
            actions: [
                {
                    kind: "openModalText",
                    title: "Here is a clue!!",
                    text: "What belongs to you, but others use it more than you do?",
                },
                {
                    kind: "giveItem",
                    itemKey: "clue",
                    amount: 1
                },

            ],
        },

        //swamp girl
        {
            id: "swamp-girl2",
            type: "onInteractCell",
            x: 19,
            y: 35,
            once: true,
            conditions: [
                {scope: "stats", key: "Swamp_health", op: "<=", value: 0},
            ],
            isSolid: true,
            sprite: {
                src: "assets/sprites/npc-girl-sheet.png",
                frames: 4,
                speed: 350,
                tileSize: 32
            },
            actions: [
                {
                    kind: "changeStat",
                    statKey: "swamp_health",
                    amount: -1,
                },
                {
                    kind: "openModalText",
                    title: "ouchy!",
                    text: " Here.. is your clue..." +
                        "I am soft, i am round, in forest floors i am found... What am i??"
                },
                {
                    kind: "giveItem",
                    itemKey: "clue",
                    amount: 1
                },
            ],
        },

        //slug
        {
            id: "slug",
            type: "onInteractCell",
            x: 168,
            y: 65,
            isSolid: true,

            sprite: {
                src: "assets/sprites/slugsheet.png",
                frames: 4,
                speed: 350,
            },
            actions: [
                {
                    kind: "changeStat",
                    statKey: "slug_health",
                    amount: -1,
                },
                {
                    kind: "openModalText",
                    title: "AHHHH!",
                    text: "Hit it in the mushrooms!",
                }
            ]
        },
        {
            id: "slug_dead",
            type: "onInteractCell",
            x: 168,
            y: 65,
            isSolid: true,
            once: true,
            sprite: "assets/sprites/slugsheet.png",
            conditions: [
                {scope: "stats", key: "slug_health", op: "<=", value: 0}
            ],
            actions: [
                {
                    kind: "makePassable",
                    passableSprite: null,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                },
                {
                    kind: "openModalText",
                    title: "Close to death... Defeated!!",
                    text: "Here.. is your clue..." +
                        "I stand tall and mighty, yet i never walk. I give shade and fruits but never talk.." +
                        "What am i?"
                },
                {
                    kind: "giveItem",
                    itemKey: "clue",
                    amount: 1
                },
                {
                    kind: "giveItem",
                    itemKey: "FREEDOM!!",
                    amount: 1
                }
            ]
        },

        //boss
        {
            id: "bbg_dead2",
            type: "onInteractCell",
            x: 166,
            y: 108,
            conditions: [
                {scope: "stats", key: "boss_health", op: "<=", value: 0}
            ],
            actions: [
                {
                    kind: "makePassable",
                    passableSprite: null,
            id: "bbg",
            type: "onInteractCell",
            x: 165,
            y: 108,
            isSolid: true,
            conditions: [{scope: "items", key: "weapon", op: ">=", value: 1}],
            actions: [
                {
                    kind: "changeStat",
                    statKey: "boss_health",
                    amount: -2,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                },
                {
                    kind: "openModalText",
                    title: "VICTORY!!",
                    text: "You did it, you defeated the boss... You can go now, leave this realm to its inhabitants, I'm sure someone is waiting for you at home"
                },
                {
                    kind: "giveItem",
                    itemKey: "FREEDOM!!",
                    amount: 1
                }
            ]
        },
        {
            id: "bbg_dead3",
            type: "onInteractCell",
            x: 167,
            y: 109,
            conditions: [
                {scope: "stats", key: "boss_health", op: "<=", value: 0}
                    title: "AHHHH!",
                    text: "Ooh that looked like it hurts",
                }
            ],
            elseAction: {
                kind: "changeStat",
                statKey: "health",
                amount: -3,
            },
        },
        {
            id: "bbg_dead",
            type: "onInteractCell",
            x: 165,
            y: 108,
            conditions: [
                {scope: "stats", key: "boss_health", op: "===", value: -1}
            ],
            actions: [
                {
                    kind: "makePassable",
                    passableSprite: null,
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                },
                {
                    kind: "openModalText",
                    title: "VICTORY!!",
                    text: "You did it, you defeated the boss... You can go now, leave this realm to its inhabitants, I'm sure someone is waiting for you at home"
                },
                {
                    kind: "giveItem",
                    itemKey: "FREEDOM!!",
                    amount: 1
                },
                {
                    kind: "changeStat",
                    statKey: "health",
                    amount: -1
                },
                {
                    kind: "openModalText",
                    title: "VICTORY!!",
                    text: "You did it, you defeated the boss... You can go now, leave this realm to its inhabitants, I'm sure someone is waiting for you at home"
                },
                {
                    kind: "giveItem",
                    itemKey: "FREEDOM!!",
                    amount: 1
                },
                {
                    kind: "playSound",
                    soundKey: "teleport",
                },
                {
                    kind: "teleport",
                    targetX: 104,
                    targetY: 30,
                    sfx: "teleport",
                }
            ]
        },

        //videos
        {
            id: "waterfall_video",
            type: "onEnterCell",
            x: 157,
            y: 11,
            sprite: "assets/sprites/question.png",
            actions: [
                {
                    kind: "openModalVideo",
                    title: "Waterfall",
                    contentKey: "waterfall_clip",
                },
            ],
        },
        {
            id: "gate_video",
            type: "onEnterCell",
            x: 135,
            y: 115,
            sprite: "assets/sprites/question.png",
            actions: [
                {
                    kind: "openModalVideo",
                    title: "gate",
                    contentKey: "gate_clip",
                },
            ],
        },

        //key and jump
        {
            id: "super special key1",
            id: "super_special_key1",
            type: "onInteractCell",
            x: 94,
            y: 79,
            once: true,
            sprite: "assets/sprites/question.png",
            actions: [
                {
                    kind: "playSound",
                    soundKey: "pickup",
                },
                {
                    kind: "giveItem",
                    itemKey: "super special key2",
                    amount: 1,
                },
                {
                    kind: "openModalText",
                    title: "Good catch!",
                    text: "good job on founding the super special key! Now you can go battle the boss!!.",
                },
                {
                    kind: "giveItem",
                    itemKey: "super_special_key2",
                    amount: 1,
                },
            ],
        },
        {
            id: "portal_up_jump",
            type: "onEnterCell",
            x: 103,
            y: 30,
            conditions: [{scope: "items", key: "Clue", op: ">=", value: 5}],
            conditions: [{scope: "items", key: "clue", op: ">=", value: 5}],
            actions: [
                {
                    kind: "playSound",
                    soundKey: "teleport",
                },
                {
                    kind: "teleport",
                    targetX: 18,
                    targetY: 100,
                    sfx: "teleport",
                },
            ],
        },
reverttest
    ],
};
