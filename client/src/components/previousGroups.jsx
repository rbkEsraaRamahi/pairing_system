import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SinglePreviouseGroups from './SinglePreviouseGroups';
import methods from './methods';

class previousGroups extends React.Component {
  constructor() {
    super()
    this.state = {
      names: [{
        "generationData": {
          "id": 107,
          "title": "angular",
          "group_id": 34,
          "group_size": 2,
          "created_at": "2017-02-01T06:52:35.316Z"
        },
        "pairs": [
          {
            "user1_uid": "90796afadf27",
            "user2_uid": "c1a4febd9f3a",
            "gen_table_id": 107
          },
          {
            "user1_uid": "ccff0fb7dab9",
            "user2_uid": "8a0152908d6d",
            "gen_table_id": 107
          },
          {
            "user1_uid": "5c0338a1808b",
            "user2_uid": "ddedf3498fbd",
            "gen_table_id": 107
          },
          {
            "user1_uid": "72ecbbc6a770",
            "user2_uid": "1b5d0f1b60b8",
            "gen_table_id": 107
          },
          {
            "user1_uid": "95facfee3329",
            "user2_uid": "3749c6c12d59",
            "gen_table_id": 107
          },
          {
            "user1_uid": "1d0848a068be",
            "user2_uid": "2b94c588cc65",
            "gen_table_id": 107
          },
          {
            "user1_uid": "b37ee1853c4f",
            "user2_uid": "2f1ec768d657",
            "gen_table_id": 107
          },
          {
            "user1_uid": "2ba207d0edd0",
            "user2_uid": "fde00c4f36cc",
            "gen_table_id": 107
          },
          {
            "user1_uid": "4eed65b1c76e",
            "user2_uid": "2ee3aa2d360c",
            "gen_table_id": 107
          },
          {
            "user1_uid": "c5b1c052c9e6",
            "user2_uid": "3061940d7eb5",
            "gen_table_id": 107
          },
          {
            "user1_uid": "444a841834d0",
            "user2_uid": "-0",
            "gen_table_id": 107
          },
          {
            "user1_uid": "8b09dbe35196",
            "user2_uid": "09f1e842bb0b",
            "gen_table_id": 107
          },
          {
            "user1_uid": "4292dc196d7c",
            "user2_uid": "48e0dac5793d",
            "gen_table_id": 107
          },
          {
            "user1_uid": "0d1e8556fabe",
            "user2_uid": "13e7d997f173",
            "gen_table_id": 107
          },
          {
            "user1_uid": "5c82a38a3d00",
            "user2_uid": "1cd7211996d8",
            "gen_table_id": 107
          },
          {
            "user1_uid": "cd085f26307c",
            "user2_uid": "e1a449490658",
            "gen_table_id": 107
          }
        ]
      },
        {
          "generationData": {
            "id": 84,
            "title": "Inheritance Patterns",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-07T00:45:46.360Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 84
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "2f1ec768d657",
              "gen_table_id": 84
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "444a841834d0",
              "gen_table_id": 84
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "-0",
              "gen_table_id": 84
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 84
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "3749c6c12d59",
              "gen_table_id": 84
            },
            {
              "user1_uid": "ea037b705290",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 84
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "ddedf3498fbd",
              "gen_table_id": 84
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 84
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "b37ee1853c4f",
              "gen_table_id": 84
            },
            {
              "user1_uid": "a36db324a520",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 84
            },
            {
              "user1_uid": "ddfa84aec200",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 84
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 84
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "4eed65b1c76e",
              "gen_table_id": 84
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "e1a449490658",
              "gen_table_id": 84
            },
            {
              "user1_uid": "fde00c4f36cc",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 84
            },
            {
              "user1_uid": "5c82a38a3d00",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 84
            },
            {
              "user1_uid": "13e7d997f173",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 84
            }
          ]
        },
        {
          "generationData": {
            "id": 91,
            "title": "WatchOut D3",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-11T08:36:49.207Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "e1a449490658",
              "gen_table_id": 91
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 91
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "b37ee1853c4f",
              "gen_table_id": 91
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 91
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "3749c6c12d59",
              "gen_table_id": 91
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "fde00c4f36cc",
              "gen_table_id": 91
            },
            {
              "user1_uid": "ea037b705290",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 91
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 91
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 91
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "-0",
              "gen_table_id": 91
            },
            {
              "user1_uid": "a36db324a520",
              "user2_uid": "4eed65b1c76e",
              "gen_table_id": 91
            },
            {
              "user1_uid": "ddfa84aec200",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 91
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 91
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 91
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 91
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "c5b1c052c9e6",
              "gen_table_id": 91
            },
            {
              "user1_uid": "2ee3aa2d360c",
              "user2_uid": "444a841834d0",
              "gen_table_id": 91
            },
            {
              "user1_uid": "4292dc196d7c",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 91
            }
          ]
        },
        {
          "generationData": {
            "id": 105,
            "title": "Database",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-25T06:37:26.168Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "ddedf3498fbd",
              "gen_table_id": 105
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "3749c6c12d59",
              "gen_table_id": 105
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 105
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 105
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "e1a449490658",
              "gen_table_id": 105
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 105
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "1b5d0f1b60b8",
              "gen_table_id": 105
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 105
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "fde00c4f36cc",
              "gen_table_id": 105
            },
            {
              "user1_uid": "b37ee1853c4f",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 105
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 105
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 105
            },
            {
              "user1_uid": "4eed65b1c76e",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 105
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 105
            },
            {
              "user1_uid": "444a841834d0",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 105
            },
            {
              "user1_uid": "8b09dbe35196",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 105
            }
          ]
        },
        {
          "generationData": {
            "id": 103,
            "title": "Node.js",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-21T08:18:35.667Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 103
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 103
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "2f1ec768d657",
              "gen_table_id": 103
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "95facfee3329",
              "gen_table_id": 103
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "9b3e5f66e1eb",
              "gen_table_id": 103
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 103
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "1d0848a068be",
              "gen_table_id": 103
            },
            {
              "user1_uid": "b37ee1853c4f",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 103
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 103
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 103
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "444a841834d0",
              "gen_table_id": 103
            },
            {
              "user1_uid": "4eed65b1c76e",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 103
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 103
            },
            {
              "user1_uid": "fde00c4f36cc",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 103
            },
            {
              "user1_uid": "2ee3aa2d360c",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 103
            },
            {
              "user1_uid": "13e7d997f173",
              "user2_uid": "e1a449490658",
              "gen_table_id": 103
            }
          ]
        },
        {
          "generationData": {
            "id": 104,
            "title": "Server Side Techniques",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-23T08:23:42.715Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 104
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 104
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "c1a4febd9f3a",
              "gen_table_id": 104
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "444a841834d0",
              "gen_table_id": 104
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "b37ee1853c4f",
              "gen_table_id": 104
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "2f1ec768d657",
              "gen_table_id": 104
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 104
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "c5b1c052c9e6",
              "gen_table_id": 104
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "ddedf3498fbd",
              "gen_table_id": 104
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "e1a449490658",
              "gen_table_id": 104
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 104
            },
            {
              "user1_uid": "4eed65b1c76e",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 104
            },
            {
              "user1_uid": "fde00c4f36cc",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 104
            },
            {
              "user1_uid": "09f1e842bb0b",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 104
            },
            {
              "user1_uid": "4292dc196d7c",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 104
            },
            {
              "user1_uid": "48e0dac5793d",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 104
            }
          ]
        },
        {
          "generationData": {
            "id": 73,
            "title": "data modeling & data structure",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-02T07:09:50.644Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "9b3e5f66e1eb",
              "gen_table_id": 73
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 73
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "72ecbbc6a770",
              "gen_table_id": 73
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "1b5d0f1b60b8",
              "gen_table_id": 73
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "2ba207d0edd0",
              "gen_table_id": 73
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 73
            },
            {
              "user1_uid": "ea037b705290",
              "user2_uid": "-0",
              "gen_table_id": 73
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 73
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "4eed65b1c76e",
              "gen_table_id": 73
            },
            {
              "user1_uid": "a36db324a520",
              "user2_uid": "ddfa84aec200",
              "gen_table_id": 73
            },
            {
              "user1_uid": "b37ee1853c4f",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 73
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "c5b1c052c9e6",
              "gen_table_id": 73
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "fde00c4f36cc",
              "gen_table_id": 73
            },
            {
              "user1_uid": "444a841834d0",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 73
            },
            {
              "user1_uid": "4292dc196d7c",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 73
            },
            {
              "user1_uid": "48e0dac5793d",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 73
            },
            {
              "user1_uid": "3061940d7eb5",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 73
            },
            {
              "user1_uid": "2b94c588cc65",
              "user2_uid": "e1a449490658",
              "gen_table_id": 73
            }
          ]
        },
        {
          "generationData": {
            "id": 76,
            "title": "Recursion",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-02T09:36:40.283Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "ea037b705290",
              "gen_table_id": 76
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 76
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 76
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "fde00c4f36cc",
              "gen_table_id": 76
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "4eed65b1c76e",
              "gen_table_id": 76
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "b37ee1853c4f",
              "gen_table_id": 76
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "444a841834d0",
              "gen_table_id": 76
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 76
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 76
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "e1a449490658",
              "gen_table_id": 76
            },
            {
              "user1_uid": "a36db324a520",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 76
            },
            {
              "user1_uid": "ddfa84aec200",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 76
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 76
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 76
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 76
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 76
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "-0",
              "gen_table_id": 76
            },
            {
              "user1_uid": "0d1e8556fabe",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 76
            }
          ]
        },
        {
          "generationData": {
            "id": 85,
            "title": "Algorithms",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-07T01:05:57.816Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "8a0152908d6d",
              "gen_table_id": 85
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "ea037b705290",
              "gen_table_id": 85
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 85
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "c1a4febd9f3a",
              "gen_table_id": 85
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 85
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "4eed65b1c76e",
              "gen_table_id": 85
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 85
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 85
            },
            {
              "user1_uid": "a36db324a520",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 85
            },
            {
              "user1_uid": "b37ee1853c4f",
              "user2_uid": "-0",
              "gen_table_id": 85
            },
            {
              "user1_uid": "ddfa84aec200",
              "user2_uid": "e1a449490658",
              "gen_table_id": 85
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "fde00c4f36cc",
              "gen_table_id": 85
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 85
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 85
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 85
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 85
            },
            {
              "user1_uid": "444a841834d0",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 85
            },
            {
              "user1_uid": "48e0dac5793d",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 85
            }
          ]
        },
        {
          "generationData": {
            "id": 101,
            "title": "React",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-18T08:19:52.589Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "ccff0fb7dab9",
              "gen_table_id": 101
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "3749c6c12d59",
              "gen_table_id": 101
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "2f1ec768d657",
              "gen_table_id": 101
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 101
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "444a841834d0",
              "gen_table_id": 101
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "e1a449490658",
              "gen_table_id": 101
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "1b5d0f1b60b8",
              "gen_table_id": 101
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 101
            },
            {
              "user1_uid": "b37ee1853c4f",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 101
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 101
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 101
            },
            {
              "user1_uid": "4eed65b1c76e",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 101
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 101
            },
            {
              "user1_uid": "fde00c4f36cc",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 101
            },
            {
              "user1_uid": "8b09dbe35196",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 101
            },
            {
              "user1_uid": "0d1e8556fabe",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 101
            }
          ]
        },
        {
          "generationData": {
            "id": 97,
            "title": "Client-ChatterBox",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-14T09:16:50.542Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "5c0338a1808b",
              "gen_table_id": 97
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "1d0848a068be",
              "gen_table_id": 97
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "b37ee1853c4f",
              "gen_table_id": 97
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "9b3e5f66e1eb",
              "gen_table_id": 97
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "e1a449490658",
              "gen_table_id": 97
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 97
            },
            {
              "user1_uid": "ea037b705290",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 97
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 97
            },
            {
              "user1_uid": "a36db324a520",
              "user2_uid": "1b5d0f1b60b8",
              "gen_table_id": 97
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "444a841834d0",
              "gen_table_id": 97
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 97
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 97
            },
            {
              "user1_uid": "4eed65b1c76e",
              "user2_uid": "fde00c4f36cc",
              "gen_table_id": 97
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 97
            },
            {
              "user1_uid": "2ee3aa2d360c",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 97
            },
            {
              "user1_uid": "8b09dbe35196",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 97
            },
            {
              "user1_uid": "4292dc196d7c",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 97
            },
            {
              "user1_uid": "-0",
              "user2_uid": "-100",
              "gen_table_id": 97
            }
          ]
        },
        {
          "generationData": {
            "id": 98,
            "title": "Backbone",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-16T05:59:30.831Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "13e7d997f173",
              "gen_table_id": 98
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "444a841834d0",
              "gen_table_id": 98
            },
            {
              "user1_uid": "5c0338a1808b",
              "user2_uid": "48e0dac5793d",
              "gen_table_id": 98
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 98
            },
            {
              "user1_uid": "95facfee3329",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 98
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 98
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "c5b1c052c9e6",
              "gen_table_id": 98
            },
            {
              "user1_uid": "9b3e5f66e1eb",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 98
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 98
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 98
            },
            {
              "user1_uid": "b37ee1853c4f",
              "user2_uid": "2ba207d0edd0",
              "gen_table_id": 98
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 98
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "4eed65b1c76e",
              "gen_table_id": 98
            },
            {
              "user1_uid": "ddedf3498fbd",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 98
            },
            {
              "user1_uid": "fde00c4f36cc",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 98
            },
            {
              "user1_uid": "09f1e842bb0b",
              "user2_uid": "e1a449490658",
              "gen_table_id": 98
            },
            {
              "user1_uid": "-100",
              "user2_uid": "-100",
              "gen_table_id": 98
            }
          ]
        },
        {
          "generationData": {
            "id": 106,
            "title": "Deployment",
            "group_id": 34,
            "group_size": 2,
            "created_at": "2017-01-30T08:55:22.083Z"
          },
          "pairs": [
            {
              "user1_uid": "90796afadf27",
              "user2_uid": "0d1e8556fabe",
              "gen_table_id": 106
            },
            {
              "user1_uid": "ccff0fb7dab9",
              "user2_uid": "5c0338a1808b",
              "gen_table_id": 106
            },
            {
              "user1_uid": "72ecbbc6a770",
              "user2_uid": "95facfee3329",
              "gen_table_id": 106
            },
            {
              "user1_uid": "8a0152908d6d",
              "user2_uid": "09f1e842bb0b",
              "gen_table_id": 106
            },
            {
              "user1_uid": "3749c6c12d59",
              "user2_uid": "5c82a38a3d00",
              "gen_table_id": 106
            },
            {
              "user1_uid": "c1a4febd9f3a",
              "user2_uid": "4eed65b1c76e",
              "gen_table_id": 106
            },
            {
              "user1_uid": "1d0848a068be",
              "user2_uid": "3061940d7eb5",
              "gen_table_id": 106
            },
            {
              "user1_uid": "b37ee1853c4f",
              "user2_uid": "ddedf3498fbd",
              "gen_table_id": 106
            },
            {
              "user1_uid": "1b5d0f1b60b8",
              "user2_uid": "2ee3aa2d360c",
              "gen_table_id": 106
            },
            {
              "user1_uid": "2f1ec768d657",
              "user2_uid": "cd085f26307c",
              "gen_table_id": 106
            },
            {
              "user1_uid": "2ba207d0edd0",
              "user2_uid": "e1a449490658",
              "gen_table_id": 106
            },
            {
              "user1_uid": "c5b1c052c9e6",
              "user2_uid": "1cd7211996d8",
              "gen_table_id": 106
            },
            {
              "user1_uid": "fde00c4f36cc",
              "user2_uid": "4292dc196d7c",
              "gen_table_id": 106
            },
            {
              "user1_uid": "444a841834d0",
              "user2_uid": "8b09dbe35196",
              "gen_table_id": 106
            },
            {
              "user1_uid": "48e0dac5793d",
              "user2_uid": "-100",
              "gen_table_id": 106
            },
            {
              "user1_uid": "13e7d997f173",
              "user2_uid": "2b94c588cc65",
              "gen_table_id": 106
            }
          ]
        }
      ]
    }
  }

  componentWillMount() {
    this.setState({newNames: this.state.names})
  }

  handleGroupSearch = (query) => {
    this.setState({newNames: methods.groupSearch(this.state.names, query)});
  }

  handleNameSearch = (query) => {
    console.log(methods.nameSearch(this.state.names, query), 'this after ')
    this.setState({newNames: methods.nameSearch(this.state.names, query)});
  }

  render() {
    return (
        <Grid fluid>
          <SinglePreviouseGroups handleGroupSearch={(value) => {
            this.handleGroupSearch(value)
          }} handleNameSearch={(value) => {
            this.handleNameSearch(value)
          }} names={this.state.newNames}/>
        </Grid>
    )
  }
}

export default previousGroups
