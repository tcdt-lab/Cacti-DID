/**
 * Hyperledger Cactus Plugin - Connector Fabric
 *
 * Can perform basic tasks on a fabric ledger
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models

import org.openapitools.client.models.GetBlockResponseDecodedV1
import org.openapitools.client.models.GetBlockResponseEncodedV1

import com.squareup.moshi.Json

/**
 * Response from GetBlock endpoint.
 *
 * @param decodedBlock Full hyperledger fabric block data.
 * @param encodedBlock 
 */

data class GetBlockResponseV1 (

    /* Full hyperledger fabric block data. */
    @Json(name = "decodedBlock")
    val decodedBlock: kotlin.Any?,

    @Json(name = "encodedBlock")
    val encodedBlock: java.io.File

)

